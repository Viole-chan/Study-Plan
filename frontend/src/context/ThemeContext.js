import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [textDirection, setTextDirection] = useState('ltr');
  const [ttsEnabled, setTtsEnabled] = useState(true);
  const [textSize, setTextSize] = useState('medium');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    loadThemeSettings();
  }, []);

  const loadThemeSettings = async () => {
    try {
      const dark = await AsyncStorage.getItem('darkMode');
      const dir = await AsyncStorage.getItem('textDirection');
      const tts = await AsyncStorage.getItem('ttsEnabled');
      const size = await AsyncStorage.getItem('textSize');
      const lang = await AsyncStorage.getItem('language');

      if (dark) setIsDarkMode(JSON.parse(dark));
      if (dir) setTextDirection(dir);
      if (tts) setTtsEnabled(JSON.parse(tts));
      if (size) setTextSize(size);
      if (lang) setLanguage(lang);
    } catch (err) {
      console.error('Error loading theme settings:', err);
    }
  };

  const updateDarkMode = async (value) => {
    setIsDarkMode(value);
    await AsyncStorage.setItem('darkMode', JSON.stringify(value));
  };

  const updateTextDirection = async (value) => {
    setTextDirection(value);
    await AsyncStorage.setItem('textDirection', value);
  };

  const updateTTS = async (value) => {
    setTtsEnabled(value);
    await AsyncStorage.setItem('ttsEnabled', JSON.stringify(value));
  };

  const updateTextSize = async (value) => {
    setTextSize(value);
    await AsyncStorage.setItem('textSize', value);
  };

  const updateLanguage = async (value) => {
    setLanguage(value);
    await AsyncStorage.setItem('language', value);
  };

  const colors = isDarkMode
    ? { bg: '#1A1A1A', text: '#FFFFFF', card: '#2A2A2A', primary: '#007AFF', secondary: '#666666' }
    : { bg: '#FFFFFF', text: '#000000', card: '#F5F5F5', primary: '#007AFF', secondary: '#999999' };

  const value = {
    isDarkMode,
    textDirection,
    ttsEnabled,
    textSize,
    language,
    colors,
    updateDarkMode,
    updateTextDirection,
    updateTTS,
    updateTextSize,
    updateLanguage
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
