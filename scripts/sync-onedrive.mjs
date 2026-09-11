import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import {
  copyFile,
  mkdir,
  readdir,
  readFile,
  stat,
  writeFile,
} from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { parseArgs } from 'node:util';

const root = process.cwd();
const configPath = path.join(root, '.studio-storage.json');
const { values } = parseArgs({
  options: {
    target: { type: 'string' },
    'dry-run': { type: 'boolean', default: false },
    help: { type: 'boolean', default: false },
  },
  strict: true,
});

if (values.help) {
  console.log(`Usage: npm run storage:sync -- [options]

Options:
  --target <path>  OneDrive destination. Overrides .studio-storage.json,
                   NARAYANEEYAM_ONEDRIVE_ROOT, and OneDrive auto-detection.
  --dry-run        Show what would be copied without changing OneDrive.
  --help           Show this help.`);
  process.exit(0);
}

const config = await readConfig();
const oneDriveRoot =
  process.env.NARAYANEEYAM_ONEDRIVE_ROOT ??
  process.env.OneDriveConsumer ??
  process.env.OneDrive ??
  process.env.OneDriveCommercial;
const target = path.resolve(
  values.target ??
    config.target ??
    (oneDriveRoot ? path.join(oneDriveRoot, 'Narayaneeyam Studio') : ''),
);

if (!values.target && !config.target && !oneDriveRoot) {
  throw new Error(
    'OneDrive was not detected. Create .studio-storage.json, set ' +
      'NARAYANEEYAM_ONEDRIVE_ROOT, or pass --target <path>.',
  );
}

if (isWithin(root, target) || isWithin(target, root)) {
  throw new Error('The OneDrive destination must be outside the repository.');
}

const sourceRoots = [
  { relativePath: 'content', required: true },
  { relativePath: 'art', required: true },
  { relativePath: 'artifacts', required: false },
  { relativePath: 'intake', required: false },
  { relativePath: 'schemas', required: true },
];

const files = [];
for (const sourceRoot of sourceRoots) {
  const absolutePath = path.join(root, sourceRoot.relativePath);
  try {
    const sourceStat = await stat(absolutePath);
    if (!sourceStat.isDirectory()) {
      throw new Error(`${sourceRoot.relativePath} is not a directory.`);
    }
    await collectFiles(absolutePath, sourceRoot.relativePath, files);
  } catch (error) {
    if (error.code === 'ENOENT' && !sourceRoot.required) continue;
    throw error;
  }
}

const entries = [];
let copied = 0;
let unchanged = 0;
let totalBytes = 0;

for (const file of files.sort((a, b) => a.relativePath.localeCompare(b.relativePath))) {
  const sourceHash = await sha256(file.absolutePath);
  const destination = path.join(target, ...file.relativePath.split('/'));
  const destinationHash = await sha256IfPresent(destination);
  const fileStat = await stat(file.absolutePath);

  totalBytes += fileStat.size;
  entries.push({
    path: file.relativePath,
    bytes: fileStat.size,
    sha256: sourceHash,
  });

  if (sourceHash === destinationHash) {
    unchanged++;
    continue;
  }

  console.log(`${values['dry-run'] ? 'Would copy' : 'Copying'} ${file.relativePath}`);
  if (!values['dry-run']) {
    await mkdir(path.dirname(destination), { recursive: true });
    await copyFile(file.absolutePath, destination);
    const copiedHash = await sha256(destination);
    if (copiedHash !== sourceHash) {
      throw new Error(`Checksum verification failed for ${file.relativePath}.`);
    }
  }
  copied++;
}

const manifest = {
  schema_version: 1,
  generated_at: new Date().toISOString(),
  source_of_truth: 'local-studio',
  delete_remote_extras: false,
  file_count: entries.length,
  total_bytes: totalBytes,
  files: entries,
};

if (!values['dry-run']) {
  await mkdir(target, { recursive: true });
  await writeFile(
    path.join(target, 'studio-storage-manifest.json'),
    `${JSON.stringify(manifest, null, 2)}\n`,
    'utf8',
  );
}

console.log(
  `${values['dry-run'] ? 'Dry run complete' : 'OneDrive sync complete'}: ` +
    `${copied} copied, ${unchanged} unchanged, ${entries.length} total file(s).`,
);
console.log(`Destination: ${target}`);

async function collectFiles(directory, relativeDirectory, output) {
  const directoryEntries = await readdir(directory, { withFileTypes: true });
  for (const entry of directoryEntries) {
    const absolutePath = path.join(directory, entry.name);
    const relativePath = path.posix.join(
      relativeDirectory.split(path.sep).join('/'),
      entry.name,
    );

    if (entry.isSymbolicLink()) {
      throw new Error(`Refusing to sync symbolic link: ${relativePath}`);
    }
    if (entry.isDirectory()) {
      await collectFiles(absolutePath, relativePath, output);
    } else if (entry.isFile()) {
      output.push({ absolutePath, relativePath });
    }
  }
}

async function sha256(filePath) {
  const hash = createHash('sha256');
  for await (const chunk of createReadStream(filePath)) {
    hash.update(chunk);
  }
  return hash.digest('hex');
}

async function sha256IfPresent(filePath) {
  try {
    return await sha256(filePath);
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

function isWithin(parent, candidate) {
  const relative = path.relative(parent, candidate);
  return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative));
}

async function readConfig() {
  try {
    const parsed = JSON.parse(await readFile(configPath, 'utf8'));
    if (!parsed || typeof parsed.target !== 'string' || !parsed.target.trim()) {
      throw new Error('.studio-storage.json must contain a non-empty "target" string.');
    }
    return parsed;
  } catch (error) {
    if (error.code === 'ENOENT') return {};
    if (error instanceof SyntaxError) {
      throw new Error(`Invalid JSON in ${configPath}: ${error.message}`);
    }
    throw error;
  }
}
