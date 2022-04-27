import React from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { PokemonCard } from '../components/PokemonCard';

import { usePokemonPaginated } from '../hooks/usePokemonPaginated';

import { styles } from '../theme/AppTheme';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons } = usePokemonPaginated();
    const { navigate } = useNavigation();

    return (
        <View style={{ top }}>
            
            <Image
                source={require('../assets/pokebola.png')}
                style={ styles.pokeballBG }
            />

            <View style={{ alignItems: 'center' }}>
                <FlatList
                    data={ simplePokemonList }
                    keyExtractor={ ( pokemon ) => pokemon.id }
                    numColumns={ 2 }
                    renderItem={ ( { item } ) => <PokemonCard pokemon={ item }/>}

                    showsVerticalScrollIndicator={ false }

                    onEndReached={ loadPokemons }
                    onEndReachedThreshold={ 0.4 }
                    ListHeaderComponent={ () => <Text style={{ ...styles.title, marginBottom: 10,  }}>Pokedex</Text> }
                    ListFooterComponent={ <ActivityIndicator size={"small"} style={{ height: 100 }}/>}
                />
            </View>

        </View>
    )
}