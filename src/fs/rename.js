import fs from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ERROR_MESSAGE = 'FS operation failed';
const FOLDER = 'files';
const OLD_FILE_NAME = 'wrongFilename.txt';
const NEW_FILE_NAME = 'properFilename.md';

const FOLDER_PATH = join(fileURLToPath(import.meta.url), '..', FOLDER);
const OLD_FILE_PATH = join(FOLDER_PATH, OLD_FILE_NAME);
const NEW_FILE_PATH = join(FOLDER_PATH, NEW_FILE_NAME);

const rename = async () => {
    let isOldFileExists = true;
    let isNewFileExists = true;

    try {
        try {
            await fs.promises.access(OLD_FILE_PATH);
        } catch {
            isOldFileExists = false;
        }

        try {
            await fs.promises.access(NEW_FILE_PATH);
        } catch {
            isNewFileExists = false;
        }

        if (!isOldFileExists || isNewFileExists) {
            return Promise.reject(Error(ERROR_MESSAGE));
        }

        await fs.promises.rename(OLD_FILE_PATH, NEW_FILE_PATH);
    } catch (error) {
        throw new Error(`${ERROR_MESSAGE}: ${error}`);
    }
};

await rename();
