import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { selectedTab } from '../redux/selectedHeaderTab';

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const dispatch = useDispatch()

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    dispatch(selectedTab(tab))
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 0 && styles.activeTab]}
        onPress={() => handleTabPress(0)}
      >
        <Text style={styles.tabText}> Expenses </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, activeTab === 1 && styles.activeTab]}
        onPress={() => handleTabPress(1)}
      >
        <Text style={styles.tabText}> Income </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'lightblue',
    height: 50,
    width: '100%',
    // backgroundColor:'#90eea0'
  },
  tab: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 5,
    borderBottomColor: 'transparent',
    // paddingHorizontal:10,
  },
  activeTab: {
    color: '#fff',
    borderBottomColor: '#fff',
  },
  tabText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    padding: 5
  },
});

export default HeaderTabs;
