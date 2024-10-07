import { createWriteStream } from 'fs';
import { stdin } from 'process';
import readline  from 'readline';

const write = async () => {
   const stream = createWriteStream('./files/fileToWrite.txt');
   const rl = readline.createInterface({
    input: stdin
   });

   rl.on('line', (data) => {
    stream.write(data);
    rl.close();
  });
};

await write();