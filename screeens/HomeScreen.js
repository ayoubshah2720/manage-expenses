import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import * as IconSets from "react-native-vector-icons"
import DonutPieChartScreen from './DonutPieChartScreen';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {

  const allExpenses = useSelector((state)=> state.expenses)
  useEffect(() => {
    console.log('allExpenses',allExpenses)
  },[allExpenses])
  return (

    <View style={styles.container}>
      <ScrollView>
      <Text>HomeScreen</Text>
      <Button title='Add' onPress={() => navigation.navigate('AddAccount',)} />
      <View style={styles.chartView}>
        <DonutPieChartScreen />
      </View>
      <ScrollView>
      <View style={styles.mainIconContainer}>
        {allExpenses && allExpenses.map((item)=> {
          return(
        <View key={item.id} style={[styles.expenseType, { backgroundColor: item.color }]}>
          {/* <IconSets.Fontisto style={styles.icon} name="bus" size={30} color="#fff" /> */}
          <Text style={styles.expenseTypeTitle}> {item.name} </Text>
        </View>
          )
        })}
      </View>
      </ScrollView>
    </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  expenseType:{
    width:'100%',
    display: "flex",
    width: '80%',
    borderRadius: 10,
    marginTop:10,
    padding:20,
  },
  expenseTypeTitle:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold',
  },
  container: {
    flex: 1,
    backgroundColor: 'lightblue'
  },
  chartView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainIconContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    display: "flex",
    alignItems: 'center',
    justifyContent: "center",
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'gray',
  }
})