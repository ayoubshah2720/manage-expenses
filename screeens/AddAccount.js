import React, {useEffect, useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput} from 'react-native';


const AddAccount = ({route}) => {
    const getAmountValue = (val) => {
        console.warn(val)
    }

    const getAccountName = (val) => {
      console.warn(val)
      retrieveData()
  }

    const hideHandler = () => {
    }
let accountsValue
    const retrieveData = async () => {
        try {
            accountsValue = JSON.parse(await AsyncStorage.getItem("accounts"))
            console.log('accountsValue=========',accountsValue);
          if (accountsValue !== null) {
        console.log('accountsValue=========',accountsValue);
        // We have data!!
          }
        } catch (error) {
          // Error retrieving data
        }
      };

    useEffect(()=> {
        retrieveData()
        console.log('dataValue',route)
    })
    return (

          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}> Add account </Text>
              <View style={styles.amountView}>
              <TextInput style={styles.amountInput} keyboardType="numeric" placeholder='e.g 8000' onChangeText={getAmountValue}/>
              <Text style={styles.amountInputTitle}>PKR</Text>
              </View>

              <View style={styles.accountName}>
              <Text style={styles.accountInputTitle}> Enter Account Name </Text>
              <TextInput style={styles.accountNameInput} placeholder='Enter account name' onChangeText={getAccountName}/>
              </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                >
                <Text style={styles.textStyle} onPress={hideHandler}> Add </Text>
              </Pressable>
            </View>
          </View>
    );
}

export default AddAccount

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    //   marginTop: 22,
    },
    amountView:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row'
    },
    amountInput:{
      width:'40%',
      borderBottomColor:'green',
      borderBottomWidth:2,
      padding:10,
      margin:10,
    },
    amountInputTitle:{
      color:'green',
      fontWeight:'bold',
      fontSize:24,
      paddingRight:10,
    },
    categories:{
      width:'100%',
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'center',
      alignItems:'center',
    },
    categoryType:{
      display:"flex",
      alignItems:'center',
      justifyContent: "center",
      height:100,
      width:100,
      borderRadius:50,
      backgroundColor:'purple',
    },
    modalView: {
      flex:1,
      width:'100%',
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
      fontSize:24,
      fontWeight:'bold'
    },
    accountNameInput:{
        borderColor:'gray',
        padding:10,
        borderWidth:1,
        borderRadius:10,
        marginBottom:10,
        marginTop:10,
    }
  });