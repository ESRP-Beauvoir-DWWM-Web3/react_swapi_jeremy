import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CharacterArray = () => {

    const [characterArray, setCharacterArray] = useState(null);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const url = "https://swapi.dev/api/people"
    
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setCharacterArray(res.data)
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
                    {characterArray.results.map((result, index) => {
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
                <div className='mt-10'>
                    <div className="flex justify-center">
                        <nav aria-label="Page navigation example">
                            <ul className="flex list-style-none">
                            
                                <li className="page-item active"><a
                                className="page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                                href="/list/1">1 <span className="visually-hidden">(current)</span></a></li>
                            <li className="page-item"><a
                                className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                href="/list/2">2</a></li>
                            <li className="page-item"><a
                                className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                href="/list/3">3</a></li>
                            <li className="page-item"><a
                                className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                href="/list/2">Suivant</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
        </div>
        );
    }
};

export default CharacterArray;