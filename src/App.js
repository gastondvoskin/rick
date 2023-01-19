import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'

import { useState } from 'react'


export default function App () {
  const [characters, setCharacters] = useState([]);

  const handleSearch = (character) => {
    // if(!characters.includes)
    const idsRenderizados = [];
    characters.forEach( (element) => {
      idsRenderizados.push(element.id);
    })
    // console.log(idsRenderizados);
    // console.log(character);
    // console.log(idsRenderizados.includes(1));
    console.log(idsRenderizados.includes(character)); // CORREGIR

    // charNum = parseInt(character);
    if(!idsRenderizados.includes(character)){ // CORREGIR
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
          // console.log(data);
        if (data.id) {
            setCharacters( (state) => {
              return [...state, data];
            })
        } else {
            window.alert('Oops! There are no characters with the ID' + ' ' + character);
        }
      });
    }
  }
  // console.log(characters);  // [{}, {}] array con objetos traidos de la API

  const handleClose = (id) => {
    // console.log(id);
    const caracFilt = characters.filter( (element) => {return element.id !== id})
    setCharacters(caracFilt);
  }

  const handleRandom = () => {
    console.log('ok');
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav 
        handleSearch={handleSearch} 
      />
      
      <Cards
        characters={characters}
        handleClose={handleClose}
      />
    </div>
  )
}
