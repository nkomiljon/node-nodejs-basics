import { renameSync, existsSync } from 'fs';
const rename = async () => {
  try {
    const MD_FILE = './files/properFilename.md';
    const TXT_FILE = './files/wrongFilename.txt';
    const isNewFileNotExist = !existsSync(MD_FILE);
    const isOldFileExist = existsSync(TXT_FILE);
    
    if (isNewFileNotExist || !isOldFileExist) {
        renameSync(TXT_FILE, MD_FILE);
    }
  } catch  {
    throw new Error('FS operation failed');
  }
};

await rename();