import { createReadStream } from 'fs';
import crypto from 'node:crypto';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ERROR_MESSAGE = 'The sha256 hash calculation operation failed';
const HASH_ALGORITHM = 'sha256';
const FILE_NAME = 'fileToCalculateHashFor.txt';
const FOLDER = 'files';
const FOLDER_PATH = join(
    fileURLToPath(import.meta.url),
    '..',
    FOLDER,
    FILE_NAME
);

const calculateHash = async () => {
    const hash = crypto.createHash(HASH_ALGORITHM);
    const data = createReadStream(FOLDER_PATH);

    data.on('error', (error) => {
        throw new Error(`${ERROR_MESSAGE}: ${error}`);
    });

    data.pipe(hash)
        .setEncoding('hex')
        .on('finish', () => {
            process.stdout.write(hash.read().toString('hex') + '\n');
        });
};

await calculateHash();
