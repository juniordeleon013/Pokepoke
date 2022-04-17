import { useEffect, useRef, useState } from "react";

import { PokemonAPI } from '../domain/api/PokemonAPI';

import { IPokemonPaginatedResponse, Result, SimplePokemon } from '../domain/interfaces/pokemoninterfaces';


export const usePokemonPaginated = ( ) => {

    const [isLoading, setIsLoading] = useState( true );
    const [simplePokemonList, setSimplePokemonList] = useState< SimplePokemon[] >([]);
    const nextPageUrl = useRef("https://pokeapi.co/api/v2/pokemon/?limit=20");

    const loadPokemons = async () => {
        setIsLoading( true );
        const resp = await PokemonAPI.get<IPokemonPaginatedResponse>( nextPageUrl.current );
        
        nextPageUrl.current = resp.data.next;
        mapPokemonList( resp.data.results );
    }

    const mapPokemonList = ( pokemonList: Result[] ) => {

        const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {

            const urlParts = url.split('/');
            const id = urlParts[ urlParts.length - 2 ];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`;
            
            return { id, picture, name };

        });

        setSimplePokemonList( [ ...simplePokemonList, ...newPokemonList ] );
        setIsLoading( false );
    }

    useEffect(() => {

        loadPokemons();
        
    }, [])

    return {
        isLoading,
        simplePokemonList,
        loadPokemons,
    }
}