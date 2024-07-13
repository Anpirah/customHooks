import React from 'react';
import useApi from '../hooks/useFecthCharacters';

const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';

const PokeChars = () => {
    const { loading, data } = useApi(urlPokemon);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h2>Personaje Pokemon</h2>
            {data && (
                <>
                    <p>{data.name}</p>
                    <img src={data.sprites?.other["official-artwork"].front_default} alt={data.name} />
                </>
            )}
        </div>
    );
};

export default PokeChars;