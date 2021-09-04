import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './Navigation/Routes';
export default function App() {
  return (
  <NavigationContainer>
    <Routes />
  </NavigationContainer>
  );
}


