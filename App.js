import React, { useState } from 'react';
// import 'react-native-gesture-handler';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screeens/HomeScreen';
import ChartScreen from './screeens/ChartScreen';
import DonutPieChartScreen from './screeens/DonutPieChartScreen';
import CalculatorScreen from './screeens/CalculatorScreen';
import AddTransaction from './screeens/AddTransaction';
import AuthScreen from './screeens/AuthScreen';
import CurrencyList from './screeens/CurrencyScreen';
import AddBalance from './screeens/AddBalance';
// import { DrawerToggleButton } from '@react-navigation/drawer';
import HeaderTabs from './screeens/HeaderTabs';
import AllIcons from './screeens/AllIcons';
import AccountsInHeader from './screeens/AccountsInHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';


const Stack = createNativeStackNavigator()
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalValue, setModalValue] = useState(0);
  const [modalColor, setModalColor] = useState('');
  const modalHandler = () => {
    setModalVisible(!modalVisible)
    // navigation.navigate('AddTransaction');
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='authScreen' component={AuthScreen} />
        <Stack.Screen name='currencyScreen' component={CurrencyList} />
        <Stack.Screen name='AddBalance' component={AddBalance} />
        <Stack.Screen name='Chart1' component={DonutPieChartScreen} />
        <Stack.Screen name='Chart' component={ChartScreen} />
        <Stack.Screen name='AddAccount' component={AddAccount} />
        <Stack.Screen name='Home' component={HomeScreen} options={({ navigation }) => ({
          title: 'Awesome app',
          headerStyle: {
            backgroundColor: '#90eea0',
            width:'100%'
          },
          headerTitle: () => (
            <View>
              {modalVisible ?
                <AccountsInHeader
                  modalVisible={modalVisible}
                  setModalVisible={setModalVisible}
                  setModalValue={setModalValue}
                  setModalColor={setModalColor} />
                : null}
              <TouchableOpacity onPress={modalHandler}>
                <View style={styles.headerIconsWithTitle}>
                  <Feather name='dollar-sign' size={25} color='#fff' />
                  <Text style={{color:'#fff',fontSize:24, fontWeight:'bold'}}> Total </Text>
                  <AntDesign name='caretdown' size={20} color='#fff' />
                </View>
                <View style={styles.headerIconsWithTitle}>
                  <Text style={{color:'#fff',fontSize:24, fontWeight:'bold'}}> 1000 </Text>
                  <Text style={{color:'#fff',fontSize:24, fontWeight:'bold'}}> PKR </Text>

                </View>
              </TouchableOpacity>
              <HeaderTabs />
            </View>
          ),
        })} />
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
  headerIconsWithTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
