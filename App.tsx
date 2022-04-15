
import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { AppNavigation } from './src/navigation/AppNavigation';

const App = () => {
  return (
    <NavigationContainer>
        <AppNavigation />
    </NavigationContainer>

  )
}

export default App;