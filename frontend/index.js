import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import App from './src/App';

export default function AppWrapper() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}
