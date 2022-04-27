import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { TabsContainer } from './src/navigation/Tabs';

const App = () => {
  return (
    <NavigationContainer>
        <TabsContainer />
    </NavigationContainer>

  )
}

export default App;