import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, TouchableOpacity } from 'react-native';
import Icon, { EntypoIcon } from 'react-native-vector-icons/Entypo'
import { addExpense } from '../redux/expensesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addIncome } from '../redux/incomesSlice';


const AddTransaction = (props) => {

  const dispatch = useDispatch()
  const selectedAccount = useSelector((state) => state.account)
  const selectedTab = useSelector((state) => state.tab)
  let data;

  const getValue = (val) => {
    props.setModalValue(val);
  }

  const handleColor = (color, type) => {
    props.setModalColor(color);
    props.setExpenseType(type)
  }

  const submitHandler = () => {
    data = {
      id: Math.floor(Math.random() * 1000),
      name: props.expenseType,
      value: props.modalValue,
      color: props.modalColor,
      currencyUnit: selectedAccount[0]?.currencyUnit,
      pId: selectedAccount[0]?.id
    }

    if (selectedTab == 0) {
      dispatch(addExpense(data))
    } else {
      dispatch(addIncome(data))

    }

    props.setModalVisible(false);
  }

  useEffect(() => {
    console.log('selectedTab addtransaction',selectedTab)
  })
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          props.setModalVisible(!props.modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Income</Text>
            <View style={styles.amountView}>
              <TextInput style={styles.amountInput} keyboardType="numeric" placeholder='e.g 8000' onChangeText={getValue} />
              <Text style={styles.amountInputTitle}>PKR</Text>
              {/* <EntypoIcon name='calculator'/> */}
              <Icon name="calculator" size={30} color="#D3D3D3" />
            </View>

            <Text style={styles.categoryMainTitle}>Categories</Text>
            <View style={styles.categories}>
              <TouchableOpacity onPress={() => handleColor('#90EE90', 'Workout')}>
                <View style={[styles.categoryType, { backgroundColor: '#90EE90' }]}>
                  <Text style={styles.categoryTitle}>Workout</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleColor('#D8BFD8', 'Fashion')}>
                <View style={[styles.categoryType, { backgroundColor: '#D8BFD8' }]}>
                  <Text style={styles.categoryTitle}>Fashion</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleColor('#857ADF', 'Transport')}>
                <View style={[styles.categoryType, { backgroundColor: '#857ADF' }]}>
                  <Text style={styles.categoryTitle}>Transport</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleColor('#ffb6c1', 'Medical')}>
                <View style={[styles.categoryType, { backgroundColor: '#ffb6c1' }]}>
                  <Text style={styles.categoryTitle}>Medical</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleColor('#FF6666', 'Food')}>
                <View style={[styles.categoryType, { backgroundColor: '#FF6666' }]}>
                  <Text style={styles.categoryTitle}>Food</Text>
                </View>
              </TouchableOpacity>
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={submitHandler}>
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default AddTransaction

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  amountView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  amountInput: {
    width: '40%',
    borderBottomColor: 'green',
    borderBottomWidth: 2,
    padding: 10,
    margin: 10,
  },
  amountInputTitle: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 24,
    paddingRight: 10,
  },
  categories: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryType: {
    display: "flex",
    alignItems: 'center',
    justifyContent: "center",
    height: 100,
    width: 100,
    borderRadius: 50,
    // backgroundColor:'purple',
  },
  modalView: {
    flex: 1,
    width: '100%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});