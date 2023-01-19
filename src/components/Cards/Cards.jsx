import React from "react";
import Card from '../Card/Card.jsx';
import styles from './Cards.module.css';


export default function Cards({characters, handleClose}) {

   return (
      <div>
         {
            characters.map(({name, species, gender, image}, index) => {
               return <Card 
                  key={index}
                  handleClose={handleClose}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}                  
               />
            })
         }
      </div>
   )
}


