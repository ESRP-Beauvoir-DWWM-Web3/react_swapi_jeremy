import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CharacterArray = () => {

    const [specieArray, setSpecieArray] = useState(null);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const url = "https://swapi.dev/api/species"
    
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setSpecieArray(res.data)
                setLoaded(true)
            })
            .catch(err => {
                setError(err)
                setLoaded(true)
            })
    }, [url])

    if(!loaded) {
        return(
            <div className="flex justify-center items-center">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    } else if(error) {
        return(
            <div>
                <h1>Les archives ne trouvent pas cette ressource / code_erreur #{error.response.status}</h1>
            </div>
        )
    } else {
        return (
            <div>
                <div className='flex justify-around flex-wrap'>
                    {specieArray.results.map((result, index) => {
                        return(
                            <div key={index} className="flex justify-center mt-20">
                            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{result.name}</h5>
                                <a href={`https://starwars.fandom.com/fr/wiki/${result.name.replace(' ', '_')}`}>
                                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Details</button>
                                </a>
                            </div>
                        </div>
                        )
                    })}
                </div>
        </div>
        );
    }
};

export default CharacterArray;