import axios from "axios";

const hostBackendUrl = 'https://maxline.com/app/api';

export const Instance = axios.create({
    baseURL: hostBackendUrl,
    headers: {
        Accept: 'application/json',
        ['Content-Type']: 'application/json',
    },
});