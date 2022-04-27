import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import { AppNavigation } from './AppNavigation';
import { SearchScreen } from '../screens/SearchScreen';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

export const TabsContainer = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{ 
            backgroundColor: 'white'
         }}
         screenOptions={{
             headerShown: false,
            tabBarActiveTintColor: '#5856D6',
            tabBarLabelStyle: {
                marginBottom: ( Platform.OS === "ios" ) ? 0 : 10,
            },
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: 'rgba(255, 255, 255, 0.90)',
                borderWidth: 0,
                elevation: 0,
                height: ( Platform.OS === "ios" ) ? 80 : 60,
            }
        }}
    >
      <Tab.Screen
       options={{ 
           tabBarLabel: 'Listado',
           tabBarIcon: ( { color } ) => (
            <Icon 
                name="list-outline"
                color={ color } 
                size={ 25 } 
            />
           )
        }}
       name="Home" 
       component={ AppNavigation } 
      />
      <Tab.Screen 
        options={{ 
            tabBarLabel: 'Busqueda',
            tabBarIcon: ( { color } ) => (
             <Icon 
                 name="search-outline"
                 color={ color } 
                 size={ 25 } 
             />
            )
         }}
        name="Settings" 
        component={ SearchScreen } 
        />
    </Tab.Navigator>
  );
}