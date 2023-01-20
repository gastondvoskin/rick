import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Form from './components/Form/Form';

import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


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

  // login. inicio.
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const exampleUsername = 'example@gmail.com'; 
  // const examplePassword = '123asd';

  const login = (userData) => {
    if(userData.username = exampleUsername) {
      setAccess(true);
      navigate('/home');
    }
    console.log('ok');
  }

  // login. fin

  let location = useLocation();
  // console.log(location);
  // console.log(location.pathname);

// si la location NO es / --> mostrar el nav. 

// useEffect(() => {
//   !access && navigate('/');
// }, [access]);

  return (
    <div>   
      {location !== "/" && <Nav handleSearch={handleSearch} /> } 
      <Routes>
        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
        <Route path="/" element={<Form login={login}/>} />
        <Route path="/home" element={<Cards characters={characters} handleClose={handleClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}
