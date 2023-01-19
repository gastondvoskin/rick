import './App.css'
import Cards from './components/Cards.jsx'
import { useState } from 'react'
import Nav from './components/Nav.jsx'


export default function App () {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
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

  return (
    <div className='App' style={{ padding: '25px' }}>

      <Nav onSearch={onSearch} />
      <hr />

      <div>        
        <Cards
          characters={characters}
          // onClose={onClose}
        />
      </div>
      <hr />

    </div>
  )
}
