import { useEffect, useState } from "react";

import { PokemonFull } from '../domain/interfaces/pokemoninterfaces';
import { PokemonAPI } from '../domain/api/PokemonAPI';

export const usePokemon = ( id: string ) => {

    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull);

    const loadPokemon = async ( ) => {

        const resp = await PokemonAPI.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon( resp.data );
        setIsLoading(false);
    }

    useEffect(() => {

        loadPokemon();

    }, [])

    return {
        isLoading,
        pokemon,
    }
}