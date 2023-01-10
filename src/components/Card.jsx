import React from "react";
import styled from "styled-components";

export default function Card(
   {onClose, name, species, gender, image}
   ) {
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt="imagen" />
      </div>
   );
}
