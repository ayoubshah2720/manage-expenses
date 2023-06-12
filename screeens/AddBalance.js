import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const accounts = []
let data;
const AddBalance = ({navigation,route}) => {
    const getValue = (val) => {
        // setModalValue(val);
        console.warn(route.params)
        data = {
            key:1,
            name:'Main',
            value:val,
            currencyUnit:route.params.symbol
        }
        
    }

    // const retrieveData = async () => {
    //     try {
    //       const value = JSON.parse(await AsyncStorage.getItem("selectedItem"))
    //       if (value !== null) {
    //         // We have data!!
    //         console.log('selectedItem=========',value);
    //       }
    //     } catch (error) {
    //       // Error retrieving data
    //     }
    //   };

      const handleSubmit = async () => {
        if(accounts.length){
            //Write logic if there are multiple accounts.
        } else {
            accounts.push(data)
            console.log("accountsssssssssssss",accounts)
        }

        try {
            await AsyncStorage.setItem("accounts", JSON.stringify(accounts));
          } catch (error) {
            // Error saving data
            console.log(error)
          }
          navigation.replace('Home')
      }
    useEffect(()=>{
        console.log('selectedItem',route.params)
        // retrieveData()
    })
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
              <Text style={styles.modalTextMain}>Enter Main Account Balance</Text>
              <Text style={styles.modalText}>You Can add more accounts in accounts section</Text>
              <View style={styles.amountView}>
              <TextInput style={styles.amountInput} keyboardType="numeric" placeholder='e.g 8000' onChangeText={getValue}/>
              {/* <Text style={styles.amountInputTitle}> {value.symbol} </Text> */}
              <Text style={styles.amountInputTitle}>{route.params.symbol}</Text>
              </View>

              <View style={styles.nextBtn}>
                <Button title='Next' onPress={handleSubmit}/>
              </View>
        </View>
    </View>
  )
}

export default AddBalance

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
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
        // margin: 20,
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
      modalTextMain: {
        fontSize:24,
        fontWeight:'bold',
        marginBottom: 15,
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
})