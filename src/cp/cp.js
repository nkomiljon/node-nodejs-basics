import { join } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const { stdout, stdin } = process;
const FILE = 'script.js';
const FOLDER = 'files';
const FOLDER_PATH = join(fileURLToPath(new URL('.', import.meta.url)), FOLDER, FILE);
const SUCCESS_MESSAGE = 'Child process completed successfully';
const ERROR_MESSAGE = 'An error occurred during calculations: ';


const spawnChildProcess = async (args) => {
    const child = spawn('node', [FOLDER_PATH, ...args]);

    child.stdout.pipe(stdout);
    stdin.pipe(child.stdin);

    child.on('close', (code) => {
        if (code === 0) {
            console.log(SUCCESS_MESSAGE);
        } else {
            console.error(`Child process exited with code ${code}.`);
        }
    });

    child.on('error', (error) => {
        console.error(`${ERROR_MESSAGE} ${error}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1,2,3]);
