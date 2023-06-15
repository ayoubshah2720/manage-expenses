import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const CurrencyList = ({ navigation }) => {
    const currencies = [
        { id: 1, name: 'Pakistani Rupee', symbol: 'PKR' },
        { id: 2, name: 'United States Dollar', symbol: 'USD' },
        { id: 3, name: 'Bangladeshi Takka', symbol: 'TKA' },
        { id: 4, name: 'Indian Rupee', symbol: 'INR' },
        // Add more currency codes and names as needed
    ]

    // const [isActive, setIsActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [activeTab, setActiveTab] = useState(0);

    const handleTabPress = (tab) => {
    };

    const handlePress = async (item) => {
        setActiveTab(item.id);
        setSelectedItem(item)
    };

    return (

        <View style={styles.container}>
            {currencies.map((item) => (
                <View style={styles.currencyName} key={item.id}>
                    <TouchableOpacity
                        style={[styles.currencyButton, activeTab === item.id && styles.activeButton]}
                        onPress={() => handlePress(item)}
                        key={item.id}
                    >
                        <Text style={styles.buttonText}> {item.name} </Text>
                        <Text style={styles.buttonText}> {item.symbol} </Text>
                    </TouchableOpacity>
                </View>
            ))}

            <Button style={styles.mainButton} title='Next' onPress={() => navigation.navigate('AddBalance', selectedItem)} />
        </View>

    );
};

export default CurrencyList;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:100,
        borderRadius: 10,
    },
    currencyName: {
        // backgroundColor: 'purple',
        // padding: 15,
        margin: 10,
        color: '#fff',
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'space-around',
        borderRadius: 10,
    },
    currencyButton: {
        padding: 15,
        backgroundColor: '#90EE90',
        borderRadius: 5,
    },
    buttonText: {
        // color: 'white',
        color: 'black'
    },
    activeButton: {
        backgroundColor: '#FF6666',
        color: 'black'
    },
    mainButton:{
        alignItems: 'center',
    backgroundColor: '#AD436D',
    height: 30,
    width: 150,
    marginTop: 20,
    justifyContent: 'center',
    
    }
})
