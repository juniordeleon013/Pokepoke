import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

import { FadeInImage } from './FadeInImage';

import { SimplePokemon } from '../domain/interfaces/pokemoninterfaces';

const windowWidth = Dimensions.get('window').width;

interface IProps {
    pokemon: SimplePokemon,
}

export const PokemonCard = ( { pokemon }: IProps ) => {

    const { name, picture, id } = pokemon;

    return (
        <TouchableOpacity
            activeOpacity={ 0.9 }
        >
            <View
                style={{ 
                    ...styles.cardContainer,
                    width: windowWidth * 0.4
                 }}
            >
                {/* pokemon name */}
                <View>
                    <Text style={ styles.name }>
                        { name }
                        { '\n#' + id }
                    </Text>
                </View>
                <View style={ styles.pokeballContainer }>
                    <Image 
                        source={ require('../assets/pokebola-blanca.png')}
                        style={ styles.pokeball }
                    />
                </View>
                
                <FadeInImage
                    uri={ picture }
                    style={ styles.pokemonImage }
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 10,
        backgroundColor: 'grey',
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    name:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,
    },
    pokeball:{
        width: 100,
        height: 100,
        position: 'absolute',
        right: -25,
        bottom: -25,
    },
    pokemonImage:{
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -6,
    },
    pokeballContainer:{
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.5
    }
});