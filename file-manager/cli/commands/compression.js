
import path from 'path';
import fs from 'fs';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';

export const compress = async (cwd, srcPath, destPath) => {
  const source = path.resolve(cwd, srcPath);
  const destination = path.resolve(cwd, destPath);
  const input = fs.createReadStream(source);
  const output = fs.createWriteStream(destination);
  const brotli = createBrotliCompress();
  input.pipe(brotli).pipe(output);
};

export const decompress = async (cwd, srcPath, destPath) => {
  const source = path.resolve(cwd, srcPath);
  const destination = path.resolve(cwd, destPath);
  const input = fs.createReadStream(source);
  const output = fs.createWriteStream(destination);
  const brotli = createBrotliDecompress();
  input.pipe(brotli).pipe(output);
};
