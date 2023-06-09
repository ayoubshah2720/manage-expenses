import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import PieChart from 'react-native-pie-chart'
import AddTransaction from './AddTransaction';

const DonutPieChartScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalValue, setModalValue] = useState(0);
    const [modalColor, setModalColor] = useState('');
    const modalHandler = () => {
        setModalVisible(!modalVisible)
        navigation.navigate('AddTransaction');

    }
    const widthAndHeight = 250
    // const series = [123, 321, 123, 789, 537]
    // const series = [123, 321, 123, 789, 537]
    // const sliceColor = ['#fbd203', '#ff3c00']
    // const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00']

    const [series, setSeries] = useState([123, 321]);
    const [sliceColor, setSliceColor] = useState(['purple', 'lightblue']);

    useEffect(()=>{
        series.push(modalValue);
        sliceColor.push(modalColor);
        console.warn(modalValue)
    },[])
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
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
          modalVisible={modalVisible} 
          setModalVisible={setModalVisible}
          setModalValue={setModalValue}
          setModalColor={setModalColor}/>
           : null}
          <Button title='Add' onPress={modalHandler}/>
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
        top:100
      },
})