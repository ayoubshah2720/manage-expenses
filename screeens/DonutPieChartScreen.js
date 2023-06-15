import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import PieChart from 'react-native-pie-chart'
import AddTransaction from './AddTransaction';
import { useSelector } from 'react-redux';

const DonutPieChartScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalValue, setModalValue] = useState(0);
  const [modalColor, setModalColor] = useState('');
  const [expenseType, setExpenseType] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('days');

  const selectedTab = useSelector((state)=> state.tab)
  const modalHandler = () => {
    setModalVisible(!modalVisible)
    // navigation.navigate('AddTransaction');
  }

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
  };
  const widthAndHeight = 250

  const [series, setSeries] = useState([100]);
  const [sliceColor, setSliceColor] = useState(['#AABDAF']);

  useEffect(() => {
    // if(selectedTab == 0){
      // }
      series.push(modalValue);
      sliceColor.push(modalColor);
    // } else {

    // }
  }, [modalValue, modalColor,expenseType,selectedTab])
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedFilter === 'days' && styles.activeFilterButton,
            ]}
            onPress={() => handleFilterSelect('days')}
          >
            <Text style={styles.filterButtonText}>Days</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedFilter === 'weeks' && styles.activeFilterButton,
            ]}
            onPress={() => handleFilterSelect('weeks')}
          >
            <Text style={styles.filterButtonText}>Weeks</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedFilter === 'months' && styles.activeFilterButton,
            ]}
            onPress={() => handleFilterSelect('months')}
          >
            <Text style={styles.filterButtonText}>Months</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Doughnut</Text>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.65}
          coverFill={'#FFF'}
        />
        {modalVisible ?
          <AddTransaction
          modalValue={modalValue}
          modalColor={modalColor}
          expenseType={expenseType}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            setModalValue={setModalValue}
            setModalColor={setModalColor}
            setExpenseType={setExpenseType} />
          : null}
        <Button title='Add' onPress={modalHandler} />
      </View>
    </ScrollView>
  )
}

export default DonutPieChartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    margin: 10,
    // position:'absolute',
    top: 100
  },
  chartContainer: {
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: 'row',
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 4,
    backgroundColor: '#857ADF',
  },
  activeFilterButton: {
    backgroundColor: '#5FBB7D',
  },
  filterButtonText: {
    fontSize: 14,
  },
})