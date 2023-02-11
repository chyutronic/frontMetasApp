import axios from "axios";

const api = axios.create({
    baseURL: 'https://metasappbackend-production.up.railway.app/',
})

export default api;

