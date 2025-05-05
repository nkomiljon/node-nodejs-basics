const ERROR_MESSAGE = 'No environment variables found that start with RSS_';
const parseEnv = () => {
    const envs = process.env;
    const filteredEnvs = Object.entries(envs).filter(([key]) => key.startsWith('RSS_'));

    if (filteredEnvs.length === 0) {
        console.log(ERROR_MESSAGE);
        return;
    } 

    const result = filteredEnvs
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');
    console.log(result);
    
};

parseEnv();