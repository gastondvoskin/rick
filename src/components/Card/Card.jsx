import React from "react";
import styles from './Card.module.css';

// export default function Card({handleClose, name, species, gender, image, id}) {
export default function Card(props) {

   return (
      <div className={styles.contenedor}>
         {/* <button onClick={() => {handleClose(character.id)}}>X</button> */}
         <div className={styles.contenedorCerrar}>
            <button 
               className={styles.cerrar} 
               onClick={ () => {
                  props.handleClose(props.id);
               }}>
               X
            </button>
         </div>

         <div className={styles.rectangulo}>
            <h2>{props.name}</h2>
         </div>
         
         <img className={styles.imagen} src={props.image} alt="imagen" />

         <div className={styles.rectangulo}>
            <h3>About {props.name}</h3>
            <h4>{props.species}</h4>
            <h4>{props.gender}</h4>
            <h4>{props.id}</h4>
         </div>
      </div>
   );
}
