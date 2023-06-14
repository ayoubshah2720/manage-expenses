import React, { useEffect, useState } from 'react';
// import 'react-native-gesture-handler';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screeens/HomeScreen';
import AddTransaction from './screeens/AddTransaction';
import AuthScreen from './screeens/AuthScreen';
import CurrencyList from './screeens/CurrencyScreen';
import AddBalance from './screeens/AddBalance';
// import { DrawerToggleButton } from '@react-navigation/drawer';
import AddAccount from './screeens/AddAccount';
import { Provider, useSelector } from 'react-redux';
import { Store } from './redux/Store';
import MainHeaderComponent from './screeens/MainHeaderComponent';


const Stack = createNativeStackNavigator()
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const modalHandler = () => {
    setModalVisible(!modalVisible)
    // navigation.navigate('AddTransaction');
  }
  useEffect(()=>{
  })

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='authScreen' component={AuthScreen}
          options={{headerShown: false}} />
          <Stack.Screen name='currencyScreen' component={CurrencyList} 
          options={{headerShown: false}}/>
          <Stack.Screen name='AddBalance' component={AddBalance} 
          options={{headerShown: false}}/>

                    <Stack.Screen name='Home' component={HomeScreen} options={({ navigation }) => ({
            title: 'Awesome app',
            headerStyle: {
              backgroundColor: '#90eea0',
              width: '100%'
            },
            headerTitle: () => (
              <MainHeaderComponent />
            ),
          })} />
          <Stack.Screen name='AddTransaction' component={AddTransaction} />
          <Stack.Screen name='AddAccount' component={AddAccount} />
          {/* <Stack.Screen name='Calculator' component={CalculatorScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIconsWithTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
