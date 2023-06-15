import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import HeaderTabs from './HeaderTabs';
import AccountsInHeader from './AccountsInHeader';


const MainHeaderComponent = () => {
    const selectedAccount = useSelector((state) => state.account)
    const total = useSelector((state) => state.total)
    const [modalVisible, setModalVisible] = useState(false);
    const [modalValue, setModalValue] = useState(0);
    const [modalColor, setModalColor] = useState('');
    const [isLogged, setIsLogged] = useState(false);

    const modalHandler = () => {
        setModalVisible(!modalVisible)
        // navigation.navigate('AddTransaction');
      }

    useEffect(() => {
    })
    return (
        <View style={styles.container}>
            {modalVisible ?
                <AccountsInHeader
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    setModalValue={setModalValue}
                    setModalColor={setModalColor} />
                : null}
            <TouchableOpacity onPress={modalHandler}>
                <View style={styles.headerIconsWithTitle}>
                    <Feather name='dollar-sign' size={25} color='#fff' />
                    <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}> Total </Text>
                    <AntDesign name='caretdown' size={20} color='#fff' />
                </View>
                <View style={styles.headerIconsWithTitle}>
                    <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}> {total.value} </Text>
                    <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}> {selectedAccount[0]?.currencyUnit} </Text>

                </View>
            </TouchableOpacity>
            <HeaderTabs />
        </View>
    )
}

export default MainHeaderComponent

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerIconsWithTitle: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });