import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationNativeContainer} from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationNativeContainer>
      <StatusBar barStyle="light-content" backgroundColor="#46eb34" />
      <Routes />
    </NavigationNativeContainer>
  );
}
