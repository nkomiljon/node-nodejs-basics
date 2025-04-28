import fs from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ERROR_MESSAGE = 'FS operation failed';
const FILE = 'fileToRemove.txt';
const FOLDER = 'files';
const PATH_TO_FILE = join(fileURLToPath(import.meta.url), '..', FOLDER, FILE);

const remove = async () => {
    try {
        await fs.promises.access(PATH_TO_FILE);
        await fs.promises.unlink(PATH_TO_FILE);
    } catch (error) {
     throw new Error(`${ERROR_MESSAGE}: ${error}`);
    }
};

await remove();