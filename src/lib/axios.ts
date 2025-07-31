import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://ghibliapi.vercel.app',
    timeout: 10000,
    headers: { Accept: 'application/json' },
});
