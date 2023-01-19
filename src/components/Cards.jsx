import React from "react";
import styled from "styled-components";
import Card from './Card';

const CardDiv = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   
`

export default function Cards({characters}) {
   return (
      <CardDiv>
         {
            characters.map(({name, species, gender, image}, index) => {
               return <Card 
                  // key={index}
                  // onClose={props.onClose}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}                  
               />
            })
         }
      </CardDiv>
   )
}


