import { existsSync, writeFileSync } from 'node:fs';

const create = async () => {
    const __dirname = import.meta.dirname;
    
    const FILE_NAME = 'fresh.txt';
    const FILE_CONTENT = 'I am fresh and young';
    const ERROR_MESSAGE = 'FS operation failed';

    const FILE_PATH = `${__dirname}\\files\\${FILE_NAME}`;
    
    try {
        const isFileExists = existsSync(FILE_PATH);
        if (isFileExists) throw new Error(ERROR_MESSAGE);
        
        writeFileSync(FILE_PATH, FILE_CONTENT, { encoding: 'utf8' });
    } catch (error) {
        console.error('Error:', error);
    }
};

await create();