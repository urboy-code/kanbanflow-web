import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  withCredentials: true, // for Sanctum otentication
});

// function for Api calls
export const registerUser = (userData) => {
  // CSRF cookies for Sanctum
  return apiClient.get('/sanctum/csrf-cookie').then((response) => {
    return apiClient.post('/api/v1/register', userData);
  });
};

// function for endpoint login
export const loginUser = (credentials) => {
  return apiClient.get('/sanctum/csrf-cookie').then((response) => {
    return apiClient.post('/api/v1/login', credentials);
  });
};
