import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomePage from '../views/homePage'
import FiscalPage from '../views/fiscalPage'
import Icon from 'react-native-vector-icons/FontAwesome'

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
                tabBarIcon: () => <Icon name="camera" size={30} color='#000'/>
            }}
        />
        <Tab.Screen name="Homes" component={HomePage} />
        <Tab.Screen name="Homea" component={HomePage} />
        <Tab.Screen name="Fiscal" component={FiscalPage} />
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
