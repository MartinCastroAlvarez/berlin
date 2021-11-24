import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomePage from '../views/homePage'
import FiscalPage from '../views/fiscalPage'

const Drawer = createDrawerNavigator()

const CustomDrawer = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{headerShown:true}}>
                <Drawer.Screen name="home" component={HomePage}/>
                <Drawer.Screen name="fiscal" component={FiscalPage}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default CustomDrawer
