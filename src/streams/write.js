import { createWriteStream } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const ERROR_MESSAGE = '\n Readable stream write error: ';
const COMPLETED_MESSAGE = '\n File writing completed.';
const FILE_NAME = 'fileToWrite.txt';
const FOLDER = 'files';
const FILE_PATH = join(
    fileURLToPath(import.meta.url),
    '..',
    FOLDER,
    FILE_NAME
);


const write = async () => {
    const writableStream = createWriteStream(FILE_PATH);

    process.stdin.on('data', (chunk) => {
        writableStream.write(chunk);
    });
    process.stdin.on('end', () => {
        writableStream.end();
    });

    writableStream.on('finish', () => {
        console.log(COMPLETED_MESSAGE);
    });
    writableStream.on('error', (error) => {
        console.error(`${ERROR_MESSAGE}: ${error.message}`);
    });
};

await write();