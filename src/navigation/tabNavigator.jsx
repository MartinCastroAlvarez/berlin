import React from 'react'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Button } from 'react-native-paper';


import HomePage from '../views/homePage'
import FiscalPage from '../views/fiscalPage'
import CryptosPage from '../views/cryptosPage'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return <Tab.Navigator
        screenOptions={{
            tabBarStyle:{
                    ...styles.container
            },
        }}
    >
        <Tab.Screen 
            name="Home" 
            component={HomePage} 
            screenOptions={{
                tabBarLabel: '1',
                tabBarActiveTintColor: '#e91e63',
                tabBarTintColor: '#000',
                tabBarIcon: () => <Icon name="camera" size={30} color='#000'/>
            }}
        />
        <Tab.Screen 
            name="cryptos" 
            component={CryptosPage} 
            screenOptions={{
                tabBarLabel: '2',
                tabBarActiveTintColor: '#e91e63',
                tabBarTintColor: '#000',
                tabBarIcon: () => <Icon name="camera" size={30} color='#000'/>
            }}
        />
        <Tab.Screen
            name="Fiscal"
            component={FiscalPage}
            screenOptions={{
                tabBarLabel: '3',
                tabBarActiveTintColor: '#e91e63',
                tabBarTintColor: '#000',
                tabBarIcon: () => <Icon name="camera" size={30} color='#000'/>
            }}
        />
    </Tab.Navigator>
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: "#fff",
        borderRadius: 15,
        height: 90
    }
})

export default TabNavigator
