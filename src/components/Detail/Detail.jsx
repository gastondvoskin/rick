import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
    
    const { id } = useParams();

    const [character, setCharacter] = useState({});

    // copiado de la consigna. inicio.
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.id) { // por qué es necesario el if si al hacer la petición hago click sobre algo 
                           // que me devolvió la misma petición?
              setCharacter(data);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({}); // qué significa esto? 
      }, [id]);
    // copiado de la consigna. fin.

    console.log(character);
    // console.log(character.origin.name); // por qué no funciona?
    // console.log((character.origin).json()); // tendría que hacer algo así?


    
    return(
        <div>
            <h2>Name: {character.name}</h2>
            <img src={character.image}/>

            <h4>Status: {character.status}</h4>
            <h4>Specie: {character.species}</h4>
            <h4>Gender: {character.gender}</h4>
            {/* Origin: {character.origin.name} por qué no funciona? */}
        </div>
    )
}