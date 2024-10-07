
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import {
    createReadStream,
    createWriteStream,
} from 'fs';

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream('./files/fileToCompress.txt');
    const destination = createWriteStream('archive.gz');

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('Error:', err);
            process.exitCode = 1;
        }
    });
};

await compress();