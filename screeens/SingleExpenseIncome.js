import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteExpense } from '../redux/expensesSlice'
import { deleteIncome } from '../redux/incomesSlice'
import { deleteAmount } from '../redux/totalAmountSlice'

const SingleExpenseIncome = ({ navigation,route }) => {
    const selectedAccount = useSelector((state) => state.account)
    const selectedTab = useSelector((state) => state.tab)
    const dispatch = useDispatch()

    const handleDeleteExpenseType = (id) => {
        if(selectedTab == 0 ){
            dispatch(deleteExpense(id))
            dispatch(deleteAmount({value:route.params.value, type:'expenses'}))
        }else {
            dispatch(deleteIncome(id))
            dispatch(deleteAmount({value:route.params.value, type:'incomes'}))
        }
        navigation.navigate('Home')
    }
    useEffect(() => {
    })
    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>SingleExpenseIncome</Text>
            <Text style={styles.titles} >Amount</Text>
            <Text style={[styles.typeValue, { backgroundColor: route.params.color }]}>{route.params.value} {route.params.currencyUnit}</Text>
            <Text style={styles.titles}>Account</Text>
            <Text style={[styles.typeValue, { backgroundColor: route.params.color }]}>{selectedAccount[0].name}</Text>
            <Text style={styles.titles}>Category</Text>
            <Text style={[styles.typeValue, { backgroundColor: route.params.color }]}>{route.params.name}</Text>
            <View style={styles.bottomBtn}>
                <TouchableOpacity style={styles.bottomBtn} onPress={() => handleDeleteExpenseType(route.params.id)}>
                    <Text style={styles.deleteBtn}> Delete </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SingleExpenseIncome

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
    },
    titles: {
        fontSize: 16,
        color: 'gray',
    },
    typeValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        padding: 20,
        borderRadius: 10,
        width: '90%',
        margin: 10,
    },
    bottomBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    deleteBtn: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red',
        padding: 20,
    }
})