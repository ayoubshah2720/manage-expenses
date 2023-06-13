import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import * as IconSets from "react-native-vector-icons"
import DonutPieChartScreen from './DonutPieChartScreen';

const HomeScreen = ({navigation}) => {
  const retrieveData = async () => {
    try {
      const value = JSON.parse(await AsyncStorage.getItem("accounts"))
      if (value !== null) {
        // We have data!!
        console.log('selectedItem=========', value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  useEffect(() => {
    retrieveData()
  })
  return (

    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title='Add' onPress={()=> navigation.navigate('AddAccount',)}/>
      <View style={styles.chartView}>
      <DonutPieChartScreen />
      </View>
      <View style={styles.mainIconContainer}>
        <View style={[styles.iconContainer, { backgroundColor: 'purple' }]}>
          <IconSets.Fontisto style={styles.icon} name="bus" size={30} color="#fff" />
        </View>
        <View style={[styles.iconContainer, { backgroundColor: 'green' }]}>
          <IconSets.Fontisto style={styles.icon} name="shopping-bag" size={30} color="#fff" />
        </View>
        <View style={[styles.iconContainer, { backgroundColor: 'lightpink' }]}>
          <IconSets.MaterialCommunityIcons style={styles.icon} name="arm-flex-outline" size={30} color="#fff" />
        </View>
        <View style={[styles.iconContainer, { backgroundColor: 'skyblue' }]}>
          <IconSets.MaterialCommunityIcons style={styles.icon} name="gift" size={30} color="#fff" />
        </View>
        <View style={[styles.iconContainer, { backgroundColor: 'yellow' }]}>
          <IconSets.MaterialIcons style={styles.icon} name="family-restroom" size={30} color="#fff" />
        </View>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray'
  },
  chartView:{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'lightgreen'
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
    // flex:1,
    display: "flex",
    alignItems: 'center',
    justifyContent: "center",
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'gray',
  }
})