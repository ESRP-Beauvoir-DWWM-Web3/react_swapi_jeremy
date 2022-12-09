import React from 'react';

const TemplateList = (props) => {
    return (
        <div className='flex justify-around flex-wrap'>
            {props.componentArray.map((result, index) => {
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
    );
};

export default TemplateList;