import './files/c.js';
import fs from 'node:fs';
import { release, version } from 'os';
import path, { dirname, join } from 'path';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import { URL } from 'node:url';

const readFile = async (pathToFile) => {
    const filePath = join(dirname(fileURLToPath(import.meta.url)), pathToFile);
    const data = await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(data);
};

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = await readFile('./files/a.json');
} else {
    unknownObject = await readFile('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(new URL(import.meta.url).pathname)}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
