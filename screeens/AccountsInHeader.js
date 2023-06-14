import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon, { EntypoIcon } from 'react-native-vector-icons/Entypo'
import { useSelector } from 'react-redux';


const AccountsInHeader = ({ modalVisible, setModalVisible, setModalValue, setModalColor }) => {
  const allAccounts = useSelector((state) => state.accounts)

  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioSelect = (value) => {
    console.log('touched value',value)
    setSelectedValue(value);
  };

  // const handlePress = () => {
  //   handleRadioSelect(value);
  // };
  const hideHandler = () => {
    setModalVisible(false);
  }

  useEffect(() => {
    console.log('allAccounts', allAccounts)
  }, [allAccounts])
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
        <ScrollView>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Select Account</Text>
              <View style={styles.allAccountsView}>
                {allAccounts && allAccounts.map((item)=> {
                  return(
                <TouchableOpacity
                  style={styles.radioButtonContainer}
                  key={item.id}
                  onPress={()=> handleRadioSelect(item.id)}
                >
                  <View
                    style={[
                      styles.radioButton,
                      selectedValue === item.id && styles.radioButtonSelected,
                    ]}
                  />
                  <View style={styles.radioButtonMain}>
                  <Text style={styles.radioButtonLabel}>{item.name}</Text>
                  <View style={styles.amountWithCU}>
                  <Text style={styles.amount}>{item.value}</Text>
                  <Text style={styles.amount}>{item.currencyUnit}</Text>
                  </View>
                  </View>
                </TouchableOpacity>
                  )
                })}
              </View>
              <View style={styles.bottomBtns}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle} onPress={hideHandler}>Cancle</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle} onPress={hideHandler}>Select</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
}

export default AccountsInHeader

const styles = StyleSheet.create({
  amount:{
    fontSize:20,
    fontWeight:'bold',
    paddingRight:5,
    color:'gray'
  },
  bottomBtns: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
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
  modalView: {
    flex: 1,
    width: '100%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
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
    margin: 10,
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
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'left',
    fontSize: 24
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#90EE90',
    marginRight: 10,
  },
  radioButtonSelected: {
    backgroundColor: '#90EE90',
    padding:3
  },
  radioButtonLabel: {
    fontSize: 20,
    fontWeight:'bold',
    left:0,
  },
  amountWithCU:{
    display:'flex',
    flexDirection:'row'
  },
  radioButtonMain:{
    margin:10,
  }
});