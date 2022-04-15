import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from '../theme/AppTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    usePokemonPaginated();
    const { navigate } = useNavigation();
    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={ styles.pokeballBG }
            />

            <Text style={{ ...styles.title, top: top + 20, }}>Pokedex</Text>
        </>
    )
}