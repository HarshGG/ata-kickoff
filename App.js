import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components_final/Header';
import home_page from './components_final/home_page';
import second_page from './components_final/second_page';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Header title='Aggie Ticket Assistant'/>
      <Stack.Navigator>
        <Stack.Screen name="Home page" component = {home_page}/>
        <Stack.Screen name="Second page" component = {second_page}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;