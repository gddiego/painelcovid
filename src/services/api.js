import axios from 'axios';

const api = axios.create({
    baseURL:
     'https://api.thevirustracker.com/free-api?countryTotal=BR'
})

export default api;