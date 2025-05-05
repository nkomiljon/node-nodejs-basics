import fs from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ERROR_MESSAGE = 'FS operation failed';
const FILE = 'fileToRead.txt';
const FOLDER = 'files';
const FOLDER_PATH = join(fileURLToPath(import.meta.url), '..', FOLDER, FILE);

const read = async () => {
    let data;
    try {
        await fs.promises.access(FOLDER_PATH);
        data = await fs.promises.readFile(FOLDER_PATH, 'utf-8');
    } catch (error) {
        throw new Error(`${ERROR_MESSAGE}: ${error}`);
    }
    console.log('DATA: ', data);
};

await read();