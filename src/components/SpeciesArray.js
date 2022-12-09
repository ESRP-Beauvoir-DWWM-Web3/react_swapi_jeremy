import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TemplateList from '../templates/TemplateList';

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
                <TemplateList componentArray={specieArray.results}/>
        </div>
        );
    }
};

export default CharacterArray;