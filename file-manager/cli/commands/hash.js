
import fs from 'fs';
import path from 'path';
import { createHash } from 'crypto';

export const calculate = async (cwd, filePath) => {
  const fullPath = path.resolve(cwd, filePath);
  const hash = createHash('sha256');
  const input = fs.createReadStream(fullPath);
  input.on('readable', () => {
    const data = input.read();
    if (data) hash.update(data);
    else console.log(hash.digest('hex'));
  });
};
