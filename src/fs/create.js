import { existsSync, writeFileSync } from 'fs';
const create = async () => {
   const isFileExists = existsSync('fresh.txt');
   
   if (isFileExists) {
    throw new Error('FS operation failed');
   }

   writeFileSync('fresh.txt', "I am fresh and young");
};

await create();