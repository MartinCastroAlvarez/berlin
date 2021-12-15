import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import TabNavigator from './src/navigation/tabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <TabNavigator/>
      </PaperProvider>
    </NavigationContainer>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};