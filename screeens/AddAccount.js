import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addAccount } from '../redux/accountSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addAmount } from '../redux/totalAmountSlice';


const AddAccount = ({ route }) => {


    const allData = useSelector((state) => state.accounts)
    const selectedAccount = useSelector((state) => state.account)

    let data;
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(0);
    const [accountName, setAccountName] = useState('');
    const getAmountValue = (val) => {
        console.warn(val)
        setAmount(val);
    }

    const getAccountName = (val) => {
        console.warn(val)
        setAccountName(val)

    }

    const addAccountHandler = () => {
        data = {
            id: Math.floor(Math.random() * 10000),
            name: accountName,
            value: amount,
            currencyUnit: 'PKR'
        }
        dispatch(addAccount(data))
        dispatch(addAmount({value:data.value, type:'incomes'}))
    }
    useEffect(() => {
        console.log('allData', allData)
        try {
            AsyncStorage.setItem("accounts", JSON.stringify(allData));
        } catch (error) {
            // Error saving data
            console.log(error)
        }
    })
    return (

        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}> Add account </Text>
                <View style={styles.amountView}>
                    <TextInput style={styles.amountInput} keyboardType="numeric" placeholder='e.g 8000' onChangeText={getAmountValue} />
                    <Text style={styles.amountInputTitle}>PKR</Text>
                </View>

                <View style={styles.accountName}>
                    <Text style={styles.accountInputTitle}> Enter Account Name </Text>
                    <TextInput style={styles.accountNameInput} placeholder='Enter account name' onChangeText={getAccountName} />
                </View>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                >
                    <Text style={styles.textStyle} onPress={addAccountHandler}> Add </Text>
                </Pressable>
            </View>

            <View style={styles.modalView}>
                <ScrollView style={styles.allAccountsIner}>
                    {allData && allData.map((item) => {
                        return (
                            <View style={styles.allAccountsIner} key={item.id}>
                                <TouchableOpacity style={styles.allAccountsIner} onPress={() => dispatch(selectedAccount(item))}>
                                    <Text style={styles.accountItem} onPress={() => dispatch(selectedAccount(item))}> {item.name} </Text>
                                    <Text style={styles.accountItem} onPress={() => dispatch(selectedAccount(item))}> {item.value} </Text>
                                    <Text style={styles.accountItem} onPress={() => dispatch(selectedAccount(item))}> {item.currencyUnit} </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    );
}

export default AddAccount

const styles = StyleSheet.create({
    accountItem: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2196F3',
    },
    allAccounts: {
        flexDirection: 'row',
    },
    allAccountsIner: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //   marginTop: 22,
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
        backgroundColor: 'purple',
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
        fontSize: 24,
        fontWeight: 'bold'
    },
    accountNameInput: {
        borderColor: 'gray',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
    }
});