import { readdirSync, existsSync } from 'fs';
const list = async () => {
    const PATH_FILE = './files';
    const isExists = existsSync(PATH_FILE);
        
    if (isExists) { 
    const files = readdirSync(PATH_FILE);
    console.log(files);
    } else {
        throw new Error('FS operation failed');
    }
};

await list();