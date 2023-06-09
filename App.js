import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screeens/HomeScreen';
import ChartScreen from './screeens/ChartScreen';
import DonutPieChartScreen from './screeens/DonutPieChartScreen';
import CalculatorScreen from './screeens/CalculatorScreen';
import AddTransaction from './screeens/AddTransaction';


const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Chart1' component={DonutPieChartScreen} />
        <Stack.Screen name='Chart' component={ChartScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='AddTransaction' component={AddTransaction} />
        {/* <Stack.Screen name='Calculator' component={CalculatorScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
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
