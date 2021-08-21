import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import SignUpPage from './Components/SignUpPage';
import LogInPage from './Components/LogInPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import woodsCircular from './assets/woodsCircular.png'

export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'SignUpPage' component = {SignUpPage} options={{headerShown: false}}/>
        <Stack.Screen name = 'LogInPage' component = {LogInPage} />

      
      </Stack.Navigator>
      
   
   </NavigationContainer>
   
  );
}
