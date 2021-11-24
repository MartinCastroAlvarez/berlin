import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import CustomDrawer from './src/components/drawer';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <CustomDrawer/>
    </PaperProvider>
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