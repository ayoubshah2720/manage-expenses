import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import * as IconSets from "react-native-vector-icons"
import DonutPieChartScreen from './DonutPieChartScreen';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {

  const allExpenses = useSelector((state)=> state.expenses)
  const allIncomes = useSelector((state)=> state.incomes)
  const selectedTab = useSelector((state)=> state.tab)
  useEffect(() => {
  },[allExpenses,allIncomes,selectedTab])
  return (

    <View style={styles.container}>
      <ScrollView>
      <Text>HomeScreen</Text>
      <Button title='Add Account' style={styles.addAccount} onPress={() => navigation.navigate('AddAccount',)} />
      <View style={styles.chartView}>
        <DonutPieChartScreen />
      </View>
      <ScrollView>
      <View style={styles.mainIconContainer}>
        {(allExpenses && selectedTab == 0) && allExpenses.map((item)=> {
          return(
        <View key={item.id} style={[styles.expenseType, { backgroundColor: item.color }]}>
          {/* <IconSets.Fontisto style={styles.icon} name="bus" size={30} color="#fff" /> */}
          <Text style={styles.expenseTypeTitle}> {item.name} </Text>
          <Text style={styles.expenseTypeTitle}> {item.value} {item.currencyUnit} </Text>
        </View>
          )
        })}

{(allIncomes && selectedTab == 1) && allIncomes.map((item)=> {
          return(
        <View key={item.id} style={[styles.expenseType, { backgroundColor: item.color }]}>
          {/* <IconSets.Fontisto style={styles.icon} name="bus" size={30} color="#fff" /> */}
          <Text style={styles.expenseTypeTitle}> {item.name} </Text>
          <Text style={styles.expenseTypeTitle}> {item.value} {item.currencyUnit} </Text>
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
    flexDirection:'row',
    width: '80%',
    borderRadius: 10,
    marginTop:10,
    padding:20,
    alignItems:'center',
    justifyContent:'space-between'
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
  },
  addAccount: {
    width:'80%',
    padding:20,
    margin:20,
  },
})