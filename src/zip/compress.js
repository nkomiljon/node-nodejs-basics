import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { join } from 'path';
import { fileURLToPath } from 'url';

const INPUT_FILE = 'fileToCompress.txt';
const OUTPUT_FILE = 'archive.zip';
const FOLDER = 'files';
const BASE_DIR = join(
    fileURLToPath(import.meta.url),
    '..',
    FOLDER
);
const INPUT_FILE_PATH = join(BASE_DIR, INPUT_FILE);
const OUTPUT_FILE_PATH = join(BASE_DIR, OUTPUT_FILE);
const ERROR_MESSAGE = 'Compression failed';
const SUCCESS_MESSAGE = 'Archive created successfully';

const compress = async () => {
    const readStream = createReadStream(INPUT_FILE_PATH);
    const writeStream = createWriteStream(OUTPUT_FILE_PATH);
    const gzipStream = createGzip();

    readStream.pipe(gzipStream).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log(SUCCESS_MESSAGE);
    });

    writeStream.on('error', (error) => {
        console.error(`${ERROR_MESSAGE}: ${error}`);
    });

};

await compress();