import axios from 'axios';

const api = axios.create({ baseURL: 'https://aceleradev-backend.herokuapp.com' });

export default api;