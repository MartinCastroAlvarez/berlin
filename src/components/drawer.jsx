import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomePage from '../views/homePage'
import FiscalPage from '../views/fiscalPage'

const Stack = createDrawerNavigator()

const CustomDrawer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={HomePage}/>
                <Stack.Screen name="fiscal" component={FiscalPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default CustomDrawer
