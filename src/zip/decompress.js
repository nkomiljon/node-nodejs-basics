
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { join } from 'path';
import { fileURLToPath } from 'url';

const INPUT_FILE = 'archive.zip';
const OUTPUT_FILE = 'fileToCompress.txt';
const FOLDER = 'files';
const BASE_DIR = join(
    fileURLToPath(import.meta.url),
    '..',
    FOLDER
);
const INPUT_FILE_PATH = join(BASE_DIR, INPUT_FILE);
const OUTPUT_FILE_PATH = join(BASE_DIR, OUTPUT_FILE);
const ERROR_MESSAGE = 'Decompression failed';
const SUCCESS_MESSAGE = 'File decompressed successfully';

const decompress = async () => {
    const inputStream = createReadStream(INPUT_FILE_PATH);
    const outputStream = createWriteStream(OUTPUT_FILE_PATH);
    const unzipStream = createGunzip();

    inputStream.pipe(unzipStream).pipe(outputStream);

    return new Promise((resolve, reject) => {
        outputStream.on('finish', () => {
            console.log(SUCCESS_MESSAGE);
            resolve();
        });

        outputStream.on('error', (error) => {
            console.error(`${ERROR_MESSAGE}: ${error}`);
            reject(error);
        });
    })
};

await decompress();