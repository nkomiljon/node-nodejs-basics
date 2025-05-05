
import * as nav from './commands/navigation.js';
import * as fileOps from './commands/fileOps.js';
import * as osInfo from './commands/osInfo.js';
import * as hash from './commands/hash.js';
import * as compression from './commands/compression.js';

export const handleCommand = async (input, currentDir) => {
  const [command, ...args] = input.split(' ');

  switch (command) {
    case 'up': return await nav.up(currentDir);
    case 'cd': return await nav.cd(currentDir, args[0]);
    case 'ls': return await nav.ls(currentDir);

    case 'cat': return await fileOps.cat(currentDir, args[0]);
    case 'add': return await fileOps.add(currentDir, args[0]);
    case 'mkdir': return await fileOps.mkdir(currentDir, args[0]);
    case 'rn': return await fileOps.rename(currentDir, args[0], args[1]);
    case 'cp': return await fileOps.copy(currentDir, args[0], args[1]);
    case 'mv': return await fileOps.move(currentDir, args[0], args[1]);
    case 'rm': return await fileOps.remove(currentDir, args[0]);

    case 'os': return await osInfo.handle(args[0]);
    case 'hash': return await hash.calculate(currentDir, args[0]);
    case 'compress': return await compression.compress(currentDir, args[0], args[1]);
    case 'decompress': return await compression.decompress(currentDir, args[0], args[1]);

    default: console.log('Invalid input');
  }

  return currentDir;
};
