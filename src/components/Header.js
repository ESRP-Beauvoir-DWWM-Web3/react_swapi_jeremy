import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const [term, setTerm] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        const term = e.target.value
        setTerm(term)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/people/${term}`)

    }

    return (
        <div>
            <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
  <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
    <button
      className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
      </svg>
    </button>
    <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
      <a className="text-xl text-white pr-2 font-semibold inline" href="#">Archives spatiales de Coruscant</a>
      <img className='w-6' src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Starwars_2013_Emote_Rebel_Alliance.png" alt="" />
      <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
        <li className="nav-item p-2">
          <a className="nav-link text-white" href="/">Accueil</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link text-white" href="/list/1">Personnes</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link text-white" href="/planets">Planetes</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link text-white" href="/ships">Vaisseaux</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link text-white" href="/movies">Films</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link text-white" href="/species">Especes</a>
        </li>
        {/* Search */}
        <div className="">
            
            <div className="xl:w-96">
                <form onSubmit={handleSubmit}>
                <div className="input-group relative flex flex-wrap items-stretch w-full">
                <input onChange={handleChange} value={term} type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-600 bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Chercher un identifiant" aria-label="Search" aria-describedby="button-addon2"/>
                <button className="btn inline-block px-6 py-2.5 bg-amber-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-600 hover:shadow-lg focus:bg-amber-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                </button>
                </div>
                </form>
            </div>
            </div>
                    {/* fin search */}
                </ul>
                </div>
            </div>
            </nav>
            
        </div>
        
    );
};

export default Header;