import React from 'react';
import picture from '../images/404.gif'

const Error404 = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-white text-center mb-20 text-3xl'>Erreur 404, cette information est introuvable</h1>
            <img className='m-auto' src={picture} alt="" />
        </div>
    );
};

export default Error404;