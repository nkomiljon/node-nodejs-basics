
import path from 'path';
import fs from 'fs/promises';

export const up = async (cwd) => {
  const parent = path.dirname(cwd);
  return parent === cwd ? cwd : parent;
};

export const cd = async (cwd, targetPath) => {
  const fullPath = path.resolve(cwd, targetPath);
  const stats = await fs.stat(fullPath);
  if (stats.isDirectory()) return fullPath;
  throw new Error('Not a directory');
};

export const ls = async (cwd) => {
  const entries = await fs.readdir(cwd, { withFileTypes: true });
  const dirs = [], files = [];

  for (const entry of entries) {
    if (entry.isDirectory()) dirs.push({ Name: entry.name, Type: 'directory' });
    else files.push({ Name: entry.name, Type: 'file' });
  }

  [...dirs.sort((a, b) => a.Name.localeCompare(b.Name)),
   ...files.sort((a, b) => a.Name.localeCompare(b.Name))]
  .forEach(entry =>
    console.log(`${entry.Name.padEnd(30)} ${entry.Type}`)
  );

  return cwd;
};
