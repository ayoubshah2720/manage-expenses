import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as IconSets from "react-native-vector-icons"

const HomeScreen = () => {
  return (
    
    <View style={styles.container}>
      <Text>HomeScreen</Text>
        <View style={styles.mainIconContainer}>
        <View style={[styles.iconContainer, {backgroundColor:'purple'}]}>
        <IconSets.Fontisto style={styles.icon} name="bus" size={30} color="#fff" />
        </View>
        <View style={[styles.iconContainer, {backgroundColor:'green'}]}>
        <IconSets.Fontisto style={styles.icon} name="shopping-bag" size={30} color="#fff" />
        </View>
        <View style={[styles.iconContainer, {backgroundColor:'lightpink'}]}>
        <IconSets.MaterialCommunityIcons style={styles.icon} name="arm-flex-outline" size={30} color="#fff" />
        </View>
        <View style={[styles.iconContainer, {backgroundColor:'skyblue'}]}>
        <IconSets.MaterialCommunityIcons style={styles.icon} name="gift" size={30} color="#fff" />
        </View>
        <View style={[styles.iconContainer, {backgroundColor:'yellow'}]}>
        <IconSets.MaterialIcons style={styles.icon} name="family-restroom" size={30} color="#fff" />
        </View>
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'lightblue'
    },
    mainIconContainer:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
    },
    iconContainer:{
        // flex:1,
        display:"flex",
        alignItems:'center',
        justifyContent: "center",
        height:100,
        width:100,
        borderRadius:50,
        backgroundColor:'gray',
    }
})