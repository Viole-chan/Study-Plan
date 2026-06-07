import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [textDirection, setTextDirection] = useState('ltr');
  const [ttsEnabled, setTtsEnabled] = useState(true);
  const [textSize, setTextSize] = useState('medium');

  useEffect(() => {
    loadThemeSettings();
  }, []);

  const loadThemeSettings = async () => {
    try {
      const dark = await AsyncStorage.getItem('darkMode');
      const dir = await AsyncStorage.getItem('textDirection');
      const tts = await AsyncStorage.getItem('ttsEnabled');
      const size = await AsyncStorage.getItem('textSize');
      
      if (dark) setIsDarkMode(JSON.parse(dark));
      if (dir) setTextDirection(dir);
      if (tts) setTtsEnabled(JSON.parse(tts));
      if (size) setTextSize(size);
    } catch (err) {
      console.error('Error loading theme settings:', err);
    }
  };

  const toggleDarkMode = async () => {
    const newValue = !isDarkMode;
    setIsDarkMode(newValue);
    await AsyncStorage.setItem('darkMode', JSON.stringify(newValue));
  };

  const setDirection = async (direction) => {
    setTextDirection(direction);
    await AsyncStorage.setItem('textDirection', direction);
  };

  const toggleTTS = async () => {
    const newValue = !ttsEnabled;
    setTtsEnabled(newValue);
    await AsyncStorage.setItem('ttsEnabled', JSON.stringify(newValue));
  };

  const setSize = async (size) => {
    setTextSize(size);
    await AsyncStorage.setItem('textSize', size);
  };

  const colors = isDarkMode ? {
    bg: '#1A1A1A',
    text: '#FFFFFF',
    card: '#2A2A2A',
    primary: '#007AFF',
    secondary: '#999999'
  } : {
    bg: '#FFFFFF',
    text: '#000000',
    card: '#F5F5F5',
    primary: '#007AFF',
    secondary: '#666666'
  };

  return (
    <ThemeContext.Provider value={{
      isDarkMode,
      textDirection,
      ttsEnabled,
      textSize,
      colors,
      toggleDarkMode,
      setDirection,
      toggleTTS,
      setSize
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
