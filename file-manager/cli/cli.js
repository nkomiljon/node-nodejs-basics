
import readline from 'readline';
import { handleCommand } from './commandParser.js';
import { printCurrentDirectory } from '../utils/printer.js';

export const startCLI = (startDir) => {
  let currentDir = startDir;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
  });

  const updatePrompt = () => {
    printCurrentDirectory(currentDir);
    rl.prompt();
  };

  rl.on('line', async (line) => {
    const input = line.trim();

    if (input === '.exit') {
      rl.close();
      return;
    }

    try {
      currentDir = await handleCommand(input, currentDir);
    } catch (err) {
      console.error('Operation failed');
    }

    updatePrompt();
  });

  rl.on('close', () => process.exit(0));

  updatePrompt();
};
