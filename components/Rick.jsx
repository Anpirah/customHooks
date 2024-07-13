import React from 'react';
import useApi from '../hooks/useFecthCharacters';

const urlRick = 'https://rickandmortyapi.com/api/character/1';

const RickChars = () => {
    const { loading, data } = useApi(urlRick);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Personaje Rick and Morty</h2>
            {data && (
                <>
                    <p>{data.name}</p>
                    <img src={data.image} alt={data.name} />
                </>
            )}
        </div>
    );
};

export default RickChars;