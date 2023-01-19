import React, {useState} from "react";
import styled from "styled-components";

const ContenedorDiv = styled.div`
   text-align: right;
   margin: 5px;
   padding: 4px;
   /* width: fit-content;
   width: fit-content;
   border: solid 1px green; */
`

const Input = styled.input`
   display: inline-block;
   font-size: 25px;
   margin: 5px;
`

const Boton = styled.button`
   background: green;
   color: white;
   font-size: 25px;
`
export default function SearchBar({onSearch}) {

   const [character, setCharacter] = useState('');
   // const [inputValue, setInputValue] = useState('');

   const handleChange = (event) => {
      // setInputValue(event.target.value);
      setCharacter(event.target.value);
   }

   return (
      <ContenedorDiv>
         <Input 
            type='search' 
            placeholder='Buscar' 
            // value={inputValue}
            onChange={handleChange}
         />
         <Boton onClick={() => onSearch(character)}>Agregar</Boton> 
      </ContenedorDiv>
   );
}