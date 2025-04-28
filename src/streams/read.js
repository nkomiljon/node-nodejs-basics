import { createReadStream } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const ERROR_MESSAGE = '\nReadable stream operation failed';
const FILE_NAME = 'fileToRead.txt';
const FOLDER = 'files';
const FOLDER_PATH = join(
    fileURLToPath(import.meta.url),
    '..',
    FOLDER,
    FILE_NAME
);

const read = async () => {
    const readableStream = createReadStream(FOLDER_PATH);

    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readableStream.on('error', (error) => {
        console.error(`${ERROR_MESSAGE}: ${error.message}`);
    });
};

await read();
