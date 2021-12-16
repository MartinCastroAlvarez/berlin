import React from 'react'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import HomePage from '../views/homePage'
import FiscalPage from '../views/fiscalPage'
import CryptosPage from '../views/cryptosPage'

const Tab = createBottomTabNavigator()

const titleRoutes = {
    HOME: "Home",
    CRYPTOS: "cryptos",
    FISCAL: "Fiscal"
}

const TabNavigator = () => {

    return <Tab.Navigator
        screenOptions = {({route}) => ({
            tabBarStyle: styles.tabNavigator,
            tabBarIcon: ({focused}) => {
                let iconName
                if (route.name === titleRoutes.HOME) {
                    iconName = focused ? 'camera' : 'home'
                } else if (route.name === titleRoutes.CRYPTOS) {
                    iconName = focused ? 'camera' : 'home'
                } else if (route.name === titleRoutes.FISCAL) {
                    iconName = focused ? 'camera' : 'home'
                }
                // Returns the icon corresponding to the route and if it is active
                return <Icon name={iconName} size={35} color={"#337"}/>
            },
            tabBarActiveTintColor: '#337',
            tabBarLabel: route.name
        })}
    >
        <Tab.Screen
            name={titleRoutes.HOME}
            component={HomePage}
        />
        <Tab.Screen
            name={titleRoutes.CRYPTOS}
            component={CryptosPage}
        />
        <Tab.Screen
            name={titleRoutes.FISCAL}
            component={FiscalPage}
        />
    </Tab.Navigator>
}

const styles = StyleSheet.create({
    tabNavigator: {
        position: "absolute",
        bottom: 10,
        left: 10,
        right: 10,
        elevation: 10,
        margin: 10,
        backgroundColor: "#fff",
        borderRadius: 15,
        borderTopColor: "transparent",
        height: 90,
        paddingBottom: 10,
        shadowColor: "blue",
    },
})

export default TabNavigator
