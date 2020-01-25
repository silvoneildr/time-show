import axios from 'axios';

const axiosInstance = axios.create({});

export const BASE_URL = 'https://api.github.com/repos/silvoneildr';

export const get = (path, params) => axiosInstance(path, params);