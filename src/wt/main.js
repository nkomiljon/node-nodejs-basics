import { join } from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';
import { cpus } from 'os';

const FILE = 'worker.js';
const FOLDER_PATH = join(fileURLToPath(new URL('.', import.meta.url)), FILE);
const CPUS_AMOUNT = cpus().length;
let startNumber = 10;
const results = [];
const ERROR_MESSAGE = 'An error occurred during calculations: ';
const SUCCESS_MESSAGE = 'Calculations completed successfully.';

const performCalculations = async () => {
    for (let i = 0; i < CPUS_AMOUNT; i++) {
        const promise = new Promise((resolve, reject) => {
            const worker = new Worker(FOLDER_PATH, {
                workerData: startNumber++,
            });

            worker.on('message', (data) => resolve(data));
            worker.on('error', (error) => reject(error));
        });

        try {
            const result = await promise;
            results.push({
                status: 'resolved',
                data: typeof result === 'number' && result,
            });
        } catch (error) {
            results.push({ status: 'error', data: null });
            console.error(`${ERROR_MESSAGE} ${error}`);
        }
    }

    console.log(SUCCESS_MESSAGE);
    console.log(results);
};

await performCalculations();
