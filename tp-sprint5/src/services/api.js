// src/services/api.js
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://6806c53ae81df7060eb812ee.mockapi.io/api/v1',
});
