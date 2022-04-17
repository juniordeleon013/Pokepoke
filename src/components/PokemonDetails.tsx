import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

import { PokemonFull } from '../domain/interfaces/pokemoninterfaces';
import { FadeInImage } from './FadeInImage';

interface IProps {
    pokemon: PokemonFull
}
export const PokemonDetails = ( { pokemon }: IProps ) => {

    //console.log(pokemon);
    return (
        <ScrollView
            style={{ 
                ...StyleSheet.absoluteFillObject,
             }}
        >
            <View style={{ 
                ...styles.container,
                marginTop: 370,
             }}>
                <Text style={ styles.title }>Types</Text>   
                <View style={{  flexDirection:'row' }}>
                    {
                        pokemon.types.map( ( { type } ) => (
                            <Text
                                style={{ 
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                            key={ type.name}
                            >
                                { type.name }
                            </Text>
                        ))
                    }
                </View>

                {/* weight */}
                <Text style={ styles.title }>Weight</Text>   
                <Text style={ styles.regularText }>{ pokemon.weight } pounds</Text>  
            </View>
            {/* Sprites */}
            <View style={ styles.container }>
                 <Text style={ styles.title }>Sprites</Text>
            </View>

            <ScrollView
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
            >
                <FadeInImage 
                    uri={ pokemon.sprites.front_default }
                    style={ styles.basicSprite }
                />
                <FadeInImage 
                    uri={ pokemon.sprites.back_default }
                    style={ styles.basicSprite }
                />
                <FadeInImage 
                    uri={ pokemon.sprites.front_shiny }
                    style={ styles.basicSprite }
                />
                <FadeInImage 
                    uri={ pokemon.sprites.back_default }
                    style={ styles.basicSprite }
                />
            </ScrollView>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,

    },
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
    },
    regularText:{
        fontSize: 19,
    },
    basicSprite:{
        width: 100,
        height: 100,
    }
})