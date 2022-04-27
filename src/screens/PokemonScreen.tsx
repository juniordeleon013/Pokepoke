import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import { FadeInImage } from '../components/FadeInImage';

import { usePokemon } from '../hooks/usePokemon';

import { RootStackParams } from '../navigation/AppNavigation';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonDetails } from '../components/PokemonDetails';

interface IProps extends StackScreenProps<RootStackParams, 'Pokemon'> {};

export const PokemonScreen = ( { route, navigation }: IProps ) => {

    const { simplePokemon: { name, id, picture }, color } = route.params;
    const { top } = useSafeAreaInsets();
    const { isLoading, pokemon } = usePokemon( id );

    console.log(pokemon.height);

    return (
        <View style={{  flex: 1 }}>
            <View style={{ 
                ...styles.headerContainer,
                backgroundColor: color,
            }}>
                {/* back button */}
                <TouchableOpacity 
                    onPress={ () => navigation.pop() }
                    activeOpacity={ 0.8 }
                    style={{ 
                        ...styles.backButton,
                        top: top + 5,
                    }}
                >
                    <Icon 
                        name="arrow-back-outline"
                        color="white"
                        size={ 30 }
                    />
                </TouchableOpacity>

                {/* pokemon name */}
                <Text style={{ 
                    ...styles.pokemonName,
                    top: top + 40
                 }}>
                    { name +'\n'}#{ id }
                </Text>

                {/* white pokeball */}
                <Image 
                    source={ require('../assets/pokebola-blanca.png') }
                    style={ styles.pokeball }
                />

                <FadeInImage 
                    uri={ picture }
                    style={ styles.pokemonImage }
                />
                
            </View>

            {/* details */}
            {
                isLoading ? (
                    <View style={ styles.activityIndicator }>
                        <ActivityIndicator 
                            color={ color }
                            size={ "large" }
                        />
                    </View>
                ): <PokemonDetails pokemon={ pokemon }/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        height: 370,
        zIndex: 999,
        alignItems:'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton:{
        position: 'absolute',
        left: 20,
    },
    pokemonName:{
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
    },
    pokeball:{
        width: 230,
        height: 230,
        bottom: -35,
        opacity: 0.7
    },
    pokemonImage:{
        width: 230,
        height: 230,
        position: 'absolute',
        bottom: -15,
    },
    activityIndicator:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})