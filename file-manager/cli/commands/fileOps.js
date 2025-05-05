
import fs from 'fs/promises';
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';

export const cat = async (cwd, filePath) => {
  const fullPath = path.resolve(cwd, filePath);
  const stream = createReadStream(fullPath, 'utf-8');
  stream.pipe(process.stdout);
};

export const add = async (cwd, fileName) => {
  const fullPath = path.join(cwd, fileName);
  await fs.writeFile(fullPath, '');
};

export const mkdir = async (cwd, dirName) => {
  const fullPath = path.join(cwd, dirName);
  await fs.mkdir(fullPath);
};

export const rename = async (cwd, filePath, newFileName) => {
  const fullPath = path.resolve(cwd, filePath);
  const newFullPath = path.join(path.dirname(fullPath), newFileName);
  await fs.rename(fullPath, newFullPath);
};

export const copy = async (cwd, filePath, destPath) => {
  const src = path.resolve(cwd, filePath);
  const dest = path.resolve(cwd, destPath, path.basename(src));
  const readable = createReadStream(src);
  const writable = createWriteStream(dest);
  readable.pipe(writable);
};

export const move = async (cwd, filePath, destPath) => {
  await copy(cwd, filePath, destPath);
  await remove(cwd, filePath);
};

export const remove = async (cwd, filePath) => {
  const fullPath = path.resolve(cwd, filePath);
  await fs.unlink(fullPath);
};
