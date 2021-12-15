import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import TabNavigator from './src/navigation/tabNavigator'

export default function App() {
    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <TabNavigator/>
            </NavigationContainer>
        </PaperProvider>
    )
}

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        accent: 'yellow',
    }
};
