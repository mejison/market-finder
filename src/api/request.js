import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://apitest.marketfinder.co/api/',
  headers: {
    'Accept': 'application/json',
  }
});

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('_token')
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`
    }
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default instance