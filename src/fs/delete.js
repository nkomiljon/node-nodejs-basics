import { unlink } from 'fs';

const remove = async () => {
    try {
        const PATH_FILE = './files/fileToRemove.txt';
        unlink(PATH_FILE, (err) => {
            if (err) throw new Error('FS operation failed');
        });
    } catch  {
        throw new Error('FS operation failed');
    }    
};

await remove();