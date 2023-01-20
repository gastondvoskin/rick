import React from "react";
import { Link } from "react-router-dom";
import Card from '../Card/Card.jsx';
import styles from './Cards.module.css';


export default function Cards(props) {
   const characters = props.characters;
   const handleClose = props.handleClose;

   return (
      <div>
         {
            characters.map((element, index) => {
               // console.log(element);
               return <Card 
                  key={element.id}
                  handleClose={handleClose}
                  name={<Link to={`/detail/${element.id}`}>{element.name}</Link>}
                  species={element.species}
                  gender={element.gender}
                  image={element.image}   
                  id={element.id}               
               />
            })
         }
      </div>
   )
}


