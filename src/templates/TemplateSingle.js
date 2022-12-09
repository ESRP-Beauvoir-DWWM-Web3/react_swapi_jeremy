import React from 'react';

const TemplateSingle = (props) => {
    return (
        <div className="flex justify-center mt-20">
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{props.componentName}</h5>
                    <p className="text-gray-700 text-base mb-4">Taille : <span className='text-red-600 font-bold'>{props.componentHeight} cms</span></p>
                    <p className="text-gray-700 text-base mb-4">Poids : <span className='text-red-600 font-bold'>{props.componentMass} kilogrammes</span></p>
                    {props.componentHairCondition === 'n/a' && (
                    <p className="text-gray-700 text-base mb-4">Couleur de cheveux : <span className='text-red-600 font-bold'>néant</span></p>
                    )}
                    {props.componentHairCondition != 'n/a' && (
                    <p className="text-gray-700 text-base mb-4">Couleur de cheveux : <span className='text-red-600 font-bold'>{props.componentHair}</span></p>
                    )}
                    <p className="text-gray-700 text-base mb-4">Couleur de peau : <span className='text-red-600 font-bold'>{props.componentSkin}</span></p>
                    <p className="text-gray-700 text-base mb-4">Couleur des yeux : <span className='text-red-600 font-bold'>{props.componentEye}</span></p>
                    <p className="text-gray-700 text-base mb-4">Année galactique de naissance : <span className='text-red-600 font-bold'>{props.componentBirth}</span></p>
                    {props.componentGenderCondition === 'n/a' && (
                    <p className="text-gray-700 text-base mb-4">Genre : <span className='text-red-600 font-bold'>néant</span></p>
                    )}
                    {props.componentGenderCondition != 'n/a' && (
                    <p className="text-gray-700 text-base mb-4">Genre : <span className='text-red-600 font-bold'>{props.componentGender}</span></p>
                    )}
                    <a href={`https://starwars.fandom.com/fr/wiki/${props.componentFandom.replace(' ', '_')}`}>
                    <button type="button" class="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Vers fandom</button>
                    </a>
                </div>
            </div>
    );
};

export default TemplateSingle;