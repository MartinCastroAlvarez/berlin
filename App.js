import React from 'react'
import { Provider } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import { store } from './src/redux/store'

import TabNavigator from './src/navigation/tabNavigator'

export default function App() {
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
            <NavigationContainer>
              <TabNavigator/>
            </NavigationContainer>
        </PaperProvider>
      </Provider>
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
