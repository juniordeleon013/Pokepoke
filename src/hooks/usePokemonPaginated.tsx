import { useEffect } from "react";

import { PokemonAPI } from '../domain/api/PokemonAPI';

import { IPokemonPaginatedResponse } from '../domain/interfaces/pokemoninterfaces';


export const usePokemonPaginated = ( ) => {

    const url = "https://pokeapi.co/api/v2/pokemon/?limit=20";

    const loadPokemons = async () => {

        const resp = await PokemonAPI.get<IPokemonPaginatedResponse>( url );

        console.log(resp.data);

    }

    useEffect(() => {

        loadPokemons();
        
    }, [])
}