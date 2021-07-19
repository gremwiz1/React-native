import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import Swipe from './src/components/Swipe';

export default function App() {
  useEffect(() => {
    (async () => await Font.loadAsync({
      'RobotoBold': require('./assets/fonts/Roboto-Bold.ttf'),
      'RobotoRegular': require('./assets/fonts/Roboto-Regular.ttf'),
    }))();
  }, [])

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Swipe />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
