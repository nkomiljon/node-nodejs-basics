import { createGunzip } from 'node:zlib';
import {
    createReadStream,
    createWriteStream,
} from 'fs';

const decompress = async () => {
    const gzip = createGunzip();
    const source = createReadStream('archive.gz');
    const destination = createWriteStream('./files/fileToCompress.txt');

    source
    .pipe(gzip)
    .pipe(destination)
    .on('finish', () => console.log('finish'));
};

await decompress();