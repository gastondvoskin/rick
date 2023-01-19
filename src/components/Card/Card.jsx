import React from "react";
import styles from './Card.module.css';

export default function Card({handleClose, name, species, gender, image}) {
   return (
      <div className={styles.contenedor}>
         {/* <button onClick={() => {handleClose(character.id)}}>X</button> */}
         <div className={styles.contenedorCerrar}>
            <button className={styles.cerrar} onClick={() => {handleClose()}}>X</button>
         </div>

         <div className={styles.rectangulo}>
            <h2>{name}</h2>
         </div>
         
         <img className={styles.imagen} src={image} alt="imagen" />

         <div className={styles.rectangulo}>
            <h3>About {name}</h3>
            <h4>{species}</h4>
            <h4>{gender}</h4>
         </div>
      </div>
   );
}
