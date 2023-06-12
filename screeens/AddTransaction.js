import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, TouchableOpacity } from 'react-native';
import Icon, { EntypoIcon } from 'react-native-vector-icons/Entypo'


const AddTransaction = ({ modalVisible, setModalVisible, setModalValue, setModalColor }) => {
  const getValue = (val) => {
    console.log('val', val)
    setModalValue(val);
  }
  const hideHandler = () => {
    setModalVisible(false);
    // setModalColor('red');
  }
  const handleColor = (color) => {
    setModalColor(color);
    console.log('color', color)
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
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
              <TouchableOpacity onPress={() => handleColor('#90EE90')}>
                <View style={[styles.categoryType, { backgroundColor: '#90EE90' }]}>
                  <Text style={styles.categoryTitle}>Workout</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleColor('#D8BFD8')}>
                <View style={[styles.categoryType, { backgroundColor: '#D8BFD8' }]}>
                  <Text style={styles.categoryTitle}>Fashion</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleColor('#89CFF0')}>
                <View style={[styles.categoryType, { backgroundColor: '#89CFF0' }]}>
                  <Text style={styles.categoryTitle}>Transport</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleColor('#ffb6c1')}>
                <View style={[styles.categoryType, { backgroundColor: '#ffb6c1' }]}>
                  <Text style={styles.categoryTitle}>Medical</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleColor('#ADD8E6')}>
                <View style={[styles.categoryType, { backgroundColor: '#ADD8E6' }]}>
                  <Text style={styles.categoryTitle}>Food</Text>
                </View>
              </TouchableOpacity>
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle} onPress={hideHandler}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
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