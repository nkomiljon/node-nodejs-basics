import fs from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ERROR_MESSAGE = 'FS operation failed';
const FOLDER_NAME = 'files';
const FOLDER_PATH = join(fileURLToPath(import.meta.url), '..', FOLDER_NAME);

const list = async () => {
    try {
        await fs.promises.access(FOLDER_PATH);
        const files = await fs.promises.readdir(FOLDER_PATH, {
            withFileTypes: true,
        });
        files.forEach((file) => console.log(file.name));
    } catch (error) {
        throw new Error(`${ERROR_MESSAGE}: ${error}`);
    }
};

await list();