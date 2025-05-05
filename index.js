
import os from 'os';
import { startCLI } from './file-manager/cli/cli.js';

const args = process.argv.slice(2);
const usernameArg = args.find(arg => arg.startsWith('--username='));
const username = usernameArg ? usernameArg.split('=')[1] : 'Anonymous';

console.log(`Welcome to the File Manager, ${username}!`);
process.on('exit', () => {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
});

startCLI(os.homedir());
