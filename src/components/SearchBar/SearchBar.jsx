import React, {useState} from "react";
import styles from './SearchBar.module.css';

export default function SearchBar({handleSearch}) {
   const [character, setCharacter] = useState('');
   // const [inputValue, setInputValue] = useState('');

   const handleChange = (event) => {
      // setInputValue(event.target.value);
      setCharacter(event.target.value);
   }

   return (
      <div className={styles.div}>
         <input className={styles.input}
            type='search' 
            placeholder='Buscar por Id...' 
            // value={inputValue}
            onChange={handleChange}
         />
         <button className={styles.button}
            onClick={() => handleSearch(character)}>Agregar
         </button>

         {/* <Boton onClick={() => handleSearch(character)}>Agregar</Boton>  */}
      </div>
   );
}