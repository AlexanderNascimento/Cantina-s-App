import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './Routes/Routes';
export default function App() {
  return (
  <NavigationContainer>
    <Routes />
  </NavigationContainer>
  );
}


