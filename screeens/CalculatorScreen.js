import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Calculator, CalculatorInput } from 'react-native-calculator'

const CalculatorScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CalculatorScreen</Text>
      {/* <Calculator style={{ flex: 1 }} /> */}
      <CalculatorInput
          fieldTextStyle={{ fontSize: 24 }}
          fieldContainerStyle={{ height: 36 }}
        />
    </View>
  )
}

export default CalculatorScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})