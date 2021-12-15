import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomePage from '../views/homePage'
import FiscalPage from '../views/fiscalPage'
import CryptosPage from '../views/cryptosPage'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{headerShown:true}}>
            <Drawer.Screen name="home" component={HomePage}/>
            <Drawer.Screen name="fiscal" component={FiscalPage}/>
            <Drawer.Screen name="cryptos" component={CryptosPage}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
