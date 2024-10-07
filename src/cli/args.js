const parseArgs = () => {

    const args = process.argv;
    const res = args
        .filter((arg) => arg.startsWith('--'))
        .map((arg) => arg.replace('--', '').replace('=', ' is '))
        .join(' ');
    console.log(res);
};

parseArgs();