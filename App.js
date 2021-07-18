import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { MainScreen } from './src/screens/MainScreen';
import { SecondScreen } from './src/screens/SecondScreen';
import { LastScreen } from './src/screens/LastScreen';
import * as Font from 'expo-font';
const Stack = createStackNavigator();

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
        <Stack.Navigator initialRouteName="MainScreen">
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{}}
          />
          <Stack.Screen name="SecondScreen" component={SecondScreen} options={{}} />
          <Stack.Screen name="LastScreen" component={LastScreen} options={{}} />
        </Stack.Navigator>
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
