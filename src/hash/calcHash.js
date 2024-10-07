import { createReadStream  } from 'node:fs';
import { createHash } from 'crypto';
import { stdout } from 'node:process';

const calculateHash = async () => {
    const hash = createHash('SHA256');
    const input = createReadStream('./files/fileToCalculateHashFor.txt');
    input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();