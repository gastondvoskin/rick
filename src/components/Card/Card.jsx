import React from "react";
import styles from './Card.module.css';

// export default function Card({handleClose, name, species, gender, image, id}) {
export default function Card(props) {

   return (
      <div className={styles.container}>
         {/* <button onClick={() => {handleClose(character.id)}}>X</button> */}
         <div className={styles.closeContainer}>
            <button 
               className={styles.cerrar} 
               onClick={ () => {
                  props.handleClose(props.id);
               }}>
               X
            </button>
         </div>

         <div className={styles.rectangulo1}>
            <h2>{props.name}</h2>
         </div>
         
         <img className={styles.imagen} src={props.image} alt="imagen" />

         <div className={styles.rectangulo2}>
            <h4>{props.species} - {props.gender}</h4>
            {/* <h4>{props.id}</h4> */}
         </div>
      </div>
   );
}
