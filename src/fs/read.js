import { readFileSync, existsSync } from 'fs';
const read = async () => {
    const PATH_FILE = './files/fileToRead.txt';
    const isFileExists = existsSync(PATH_FILE);
    
    if (!isFileExists) throw new Error('FS operation failed');

    const resuts = readFileSync(PATH_FILE, { encoding: 'utf-8' });
    console.log(resuts);
};

await read();