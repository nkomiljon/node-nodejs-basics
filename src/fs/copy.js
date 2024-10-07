import {  existsSync, mkdirSync, copyFileSync, constants, readdirSync } from 'fs';
import { join } from 'path';

const copy = async () => {
   try {
        const isExist = existsSync('./files');
        if (isExist) {
            mkdirSync(join('./', 'files_copy'));
            readdirSync(join('./files')).forEach((file) => {
            copyFileSync(`./files/${file}`, `./files_copy/${file}`, constants.COPYFILE_EXCL);
            });
        }
    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();
