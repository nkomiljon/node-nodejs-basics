const parseArgs = () => {
    const args = process.argv.slice(2);
    const result = args
        .map((arg, index) => {
            if (arg.startsWith('--')) {
                const key = arg.slice(2);
                const value = args[index + 1];
                return `${key} is ${value}`;
            }
        })
        .filter(Boolean)
        .join(', ');

    console.log(`Parsed arguments: ${result}`);
};

parseArgs();
