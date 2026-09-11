(async () => {
  const wait = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));
  const capturedPosts = new Map();
  let stableRounds = 0;
  let previousHeight = 0;

  const expandVisibleCaptions = () => {
    for (const button of document.querySelectorAll('[role="button"]')) {
      const label = button.innerText?.trim() ?? '';
      if (/^(see more|more)$/i.test(label)) button.click();
    }
  };

  const collectVisiblePosts = () => {
    for (const article of document.querySelectorAll('[role="article"]')) {
      const links = [...article.querySelectorAll('a[href]')].map((link) =>
        new URL(link.href, location.href).href,
      );
      const postUrl =
        links.find((url) => /\/posts\/|permalink\.php|story_fbid=/.test(url)) ??
        links.find((url) => /\/photo\/\?|fbid=/.test(url)) ??
        null;
      const imageUrls = [
        ...new Set(
          [...article.querySelectorAll('img[src]')]
            .filter(
              (image) =>
                image.naturalWidth >= 300 ||
                image.naturalHeight >= 300 ||
                image.getBoundingClientRect().width >= 250,
            )
            .map((image) => image.currentSrc || image.src)
            .filter((url) => /scontent|fbcdn/.test(url)),
        ),
      ];
      const caption = article.innerText?.trim() ?? '';
      if (!caption && imageUrls.length === 0) continue;

      const daskam = caption.match(/\bDasakam\s*[-:]?\s*(\d{1,3})\b/i)?.[1] ?? null;
      const key =
        postUrl ??
        `${caption.slice(0, 500)}|${imageUrls.map(stripVolatileUrlParts).join('|')}`;
      const existing = capturedPosts.get(key);
      capturedPosts.set(key, {
        capture_index: existing?.capture_index ?? capturedPosts.size + 1,
        post_url: postUrl,
        caption: caption.length >= (existing?.caption?.length ?? 0)
          ? caption
          : existing.caption,
        daskam: daskam ? Number(daskam) : existing?.daskam ?? null,
        image_urls: [...new Set([...(existing?.image_urls ?? []), ...imageUrls])],
      });
    }
  };

  collectVisiblePosts();
  for (let round = 0; round < 250 && stableRounds < 8; round++) {
    expandVisibleCaptions();
    collectVisiblePosts();
    window.scrollBy(0, Math.max(window.innerHeight * 0.85, 600));
    await wait(1200);
    collectVisiblePosts();

    const currentHeight = document.body.scrollHeight;
    stableRounds = currentHeight === previousHeight ? stableRounds + 1 : 0;
    previousHeight = currentHeight;
    console.log(
      `Facebook capture: ${capturedPosts.size} post(s), scroll ${round + 1}, stable ${stableRounds}/8`,
    );
  }

  expandVisibleCaptions();
  collectVisiblePosts();
  const posts = [...capturedPosts.values()].sort(
    (left, right) => left.capture_index - right.capture_index,
  );

  const capture = {
    schema_version: 1,
    source_page: location.href,
    captured_at: new Date().toISOString(),
    note: 'Captured from the visible, authenticated Facebook page DOM. Review captions because Facebook interface text may be included.',
    posts,
  };
  const blob = new Blob([`${JSON.stringify(capture, null, 2)}\n`], {
    type: 'application/json',
  });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `facebook-capture-${Date.now()}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
  console.log(`Captured ${posts.length} visible post(s).`);

  function stripVolatileUrlParts(value) {
    try {
      const url = new URL(value);
      return `${url.origin}${url.pathname}`;
    } catch {
      return value;
    }
  }
})();
