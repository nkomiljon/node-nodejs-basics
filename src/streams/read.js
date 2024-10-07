import { createReadStream } from 'fs';
import { stdout } from 'process';
const read = async () => {
   const stream = createReadStream('./files/fileToRead.txt');
   stream.pipe(stdout);
};

await read();