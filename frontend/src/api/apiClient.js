import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000
});

apiClient.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    if (token) config.headers.Authorization = `Bearer ${token}`;
  } catch (err) {
    console.error('Error getting token:', err);
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      AsyncStorage.removeItem('authToken');
      AsyncStorage.removeItem('userData');
    }
    return Promise.reject(error);
  }
);

export default apiClient;

export const authAPI = {
  register: (username, email, password) => apiClient.post('/auth/register', { username, email, password }),
  login: (email, password) => apiClient.post('/auth/login', { email, password })
};

export const notesAPI = {
  getAll: () => apiClient.get('/notes'),
  create: (note) => apiClient.post('/notes', note),
  getById: (id) => apiClient.get(`/notes/${id}`),
  update: (id, note) => apiClient.put(`/notes/${id}`, note),
  delete: (id) => apiClient.delete(`/notes/${id}`),
  summarize: (id, length) => apiClient.post(`/notes/${id}/summarize`, { length })
};

export const flashcardsAPI = {
  getAll: () => apiClient.get('/flashcards'),
  create: (flashcard) => apiClient.post('/flashcards', flashcard),
  update: (id, flashcard) => apiClient.put(`/flashcards/${id}`, flashcard),
  delete: (id) => apiClient.delete(`/flashcards/${id}`)
};

export const timetableAPI = {
  getAll: () => apiClient.get('/timetable'),
  generate: (subjects, hoursPerDay, startTime) => apiClient.post('/timetable/generate', { subjects, hoursPerDay, startTime }),
  create: (timetable) => apiClient.post('/timetable', timetable)
};

export const ocrAPI = {
  extract: (imageBase64, method = 'google') => apiClient.post('/ocr/extract', { imageBase64, method })
};

export const tutorAPI = {
  explain: (text, level = 'simple') => apiClient.post('/tutor/explain', { text, level })
};

export const settingsAPI = {
  get: () => apiClient.get('/settings'),
  update: (preferences) => apiClient.put('/settings', preferences)
};
