import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7041/api/', // Update with your API URL
});

api.interceptors.request.use(
    (config) => {
        // Modify the request config here (e.g., add headers)
        // Add any common headers or authentication tokens
        // config.headers['Authorization'] = `Bearer ${your_token_here}`;
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        // Modify the response data here if needed
        return response;
    },
    (error) => {
        // Handle response error
        return Promise.reject(error);
    }
);

export default api;
