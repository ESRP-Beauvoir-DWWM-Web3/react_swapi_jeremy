import Single from './components/Single'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import CharacterArray from './components/CharacterArray';
import CharacterArray2 from './components/CharacterArray2';
import CharacterArray3 from './components/CharacterArray3';
import PlanetsArray from './components/PlanetsArray';
import ShipsArray from './components/ShipsArray';
import MoviesArray from './components/MoviesArray';
import SpeciesArray from './components/SpeciesArray';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/people/:id" element={<Single/>} />
          <Route path="/list/1" element={<CharacterArray/>} />
          <Route path="/list/2" element={<CharacterArray2/>} />
          <Route path="/list/3" element={<CharacterArray3/>} />
          <Route path="/planets" element={<PlanetsArray/>} />
          <Route path="/ships" element={<ShipsArray/>} />
          <Route path="/movies" element={<MoviesArray/>} />
          <Route path="/species" element={<SpeciesArray/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
