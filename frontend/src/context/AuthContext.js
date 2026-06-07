import React, { createContext, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authAPI } from '../api/apiClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (username, email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await authAPI.register(username, email, password);
      await AsyncStorage.setItem('authToken', res.data.token);
      await AsyncStorage.setItem('userData', JSON.stringify(res.data.user));
      setToken(res.data.token);
      setUser(res.data.user);
      return res.data;
    } catch (err) {
      const message = err.response?.data?.message || 'Registration failed';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await authAPI.login(email, password);
      await AsyncStorage.setItem('authToken', res.data.token);
      await AsyncStorage.setItem('userData', JSON.stringify(res.data.user));
      setToken(res.data.token);
      setUser(res.data.user);
      return res.data;
    } catch (err) {
      const message = err.response?.data?.message || 'Login failed';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await AsyncStorage.removeItem('authToken');
      await AsyncStorage.removeItem('userData');
      setToken(null);
      setUser(null);
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setLoading(false);
    }
  };

  const restoreToken = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('authToken');
      const userData = await AsyncStorage.getItem('userData');
      if (token && userData) {
        setToken(token);
        setUser(JSON.parse(userData));
      }
    } catch (err) {
      console.error('Restore token error:', err);
    } finally {
      setLoading(false);
    }
  };

  const value = { user, token, loading, error, register, login, logout, restoreToken };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
