import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const People = () => {

    const [people, setPeople] = useState(null);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const { id } = useParams()

    const url = `https://swapi.dev/api/people/${id}`

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setPeople(res.data)
                setLoaded(true);
            })
            .catch(err => {
                setError(err)
                setLoaded(true);
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
            <div className="flex justify-center mt-20">
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{people.name}</h5>
                    <p className="text-gray-700 text-base mb-4">Taille : <span className='text-red-600 font-bold'>{people.height} cms</span></p>
                    <p className="text-gray-700 text-base mb-4">Poids : <span className='text-red-600 font-bold'>{people.mass} kilogrammes</span></p>
                    {people.hair_color === 'n/a' && (
                    <p className="text-gray-700 text-base mb-4">Couleur de cheveux : <span className='text-red-600 font-bold'>néant</span></p>
                    )}
                    {people.hair_color != 'n/a' && (
                    <p className="text-gray-700 text-base mb-4">Couleur de cheveux : <span className='text-red-600 font-bold'>{people.hair_color}</span></p>
                    )}
                    <p className="text-gray-700 text-base mb-4">Couleur de peau : <span className='text-red-600 font-bold'>{people.skin_color}</span></p>
                    <p className="text-gray-700 text-base mb-4">Couleur des yeux : <span className='text-red-600 font-bold'>{people.eye_color}</span></p>
                    <p className="text-gray-700 text-base mb-4">Année galactique de naissance : <span className='text-red-600 font-bold'>{people.birth_year}</span></p>
                    {people.gender === 'n/a' && (
                    <p className="text-gray-700 text-base mb-4">Genre : <span className='text-red-600 font-bold'>néant</span></p>
                    )}
                    {people.gender != 'n/a' && (
                    <p className="text-gray-700 text-base mb-4">Genre : <span className='text-red-600 font-bold'>{people.gender}</span></p>
                    )}
                    <a href={`https://starwars.fandom.com/fr/wiki/${people.name.replace(' ', '_')}`}>
                    <button type="button" class="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Vers fandom</button>
                    </a>
                </div>
            </div>
        );
    }
};

export default People;