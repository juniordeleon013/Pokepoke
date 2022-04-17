import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';

import { SimplePokemon } from '../domain/interfaces/pokemoninterfaces';

export type RootStackParams = {
  Home: undefined,
  Pokemon: { simplePokemon: SimplePokemon, color: string },
}

const Stack = createStackNavigator<RootStackParams>();

export const AppNavigation = () =>  {
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#fff'
          }
         }}
        initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={ HomeScreen } />
      <Stack.Screen name="Pokemon" component={ PokemonScreen } />
    </Stack.Navigator>
  );
}