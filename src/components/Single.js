import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import TemplateSingle from '../templates/TemplateSingle'

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
            <TemplateSingle componentName={people.name} componentHeight={people.height} componentMass={people.mass} componentHairCondition={people.hair_color} componentHair={people.hair_color} componentSkin={people.skin_color} componentEye={people.eye_color} componentBirth={people.birth_year} componentgenderCondition={people.gender} componentGender={people.gender} componentFandom={people.name}/>
        );
    }
};

export default People;