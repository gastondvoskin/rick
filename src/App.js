import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'

import { useState } from 'react'


export default function App () {
  const [characters, setCharacters] = useState([]);

  const handleSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
  }

  // const onClose = (id) => {
  //   setCharacters(characters.filter( (e) => {

  //   } ))
  // }
  const handleClose = () => {
    alert('se emula cierre de carta');
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav handleSearch={handleSearch} />

      <div>        
        <Cards
          characters={characters}
          handleClose={handleClose}
        />
      </div>
    </div>
  )
}
