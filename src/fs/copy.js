import * as fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SOURECE_FOLDER = join(__dirname, 'files');
const DESTINATION_FOLDER = join(__dirname, 'files_copy');
const ERROR_MESSAGE = 'FS operation failed';
const copy = async () => {
    try {
        const isSourceFolderExists = fs.existsSync(SOURECE_FOLDER);
        const isDestinationFolderExists = fs.existsSync(DESTINATION_FOLDER);

        if (!isSourceFolderExists) {
            throw new Error(`${ERROR_MESSAGE}: source folder does not exist`);
        }

        if (isDestinationFolderExists) {
            throw new Error(`${ERROR_MESSAGE}: destination folder already exists`);
        }

        const files = await fs.promises.readdir(SOURECE_FOLDER, { withFileTypes: true });
        await fs.promises.mkdir(DESTINATION_FOLDER);

        for (const file of files) {
            const sourceFilePath = join(SOURECE_FOLDER, file.name);
            const destinationFilePath = join(DESTINATION_FOLDER, file.name);

            if (file.isDirectory()) {
                await fs.promises.mkdir(destinationFilePath);
                await copy(sourceFilePath, destinationFilePath);
            } else {
                await fs.promises.copyFile(sourceFilePath, destinationFilePath);
            }
        }
    } catch (error) {
        throw new Error(`${ERROR_MESSAGE}: ${error.message}`);
    }
};

await copy();
