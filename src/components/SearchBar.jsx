import React from "react";
import styled from "styled-components";

const ContenedorDiv = styled.div`
   color: blue;
`

const Input = styled.input`
   /* hover: red; */
`

const Boton = styled.button`
   background: green;
   color: white;
`




export default function SearchBar(props) {
   return (
      <ContenedorDiv>
         <Input type='search' />
         <Boton onClick={props.onSearch}>Agregar</Boton> 
      </ContenedorDiv>
   );
}
