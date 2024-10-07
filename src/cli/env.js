const parseEnv = () => {
    const PREFIX = 'RSS_';
    const keys = Object.keys(process.env);
    const result = keys
        .filter((key) => key.startsWith(PREFIX))
        .map((key) => `${key}=${process.env[key]}`)
        .join(' ');
    console.log(result);
};

parseEnv();