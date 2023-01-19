import React, {useState} from "react";
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   const [inputValue, setInputValue] = useState('');

   const handleChange = (event) => {
      setInputValue(event.target.value);
   }

   return (
      <div className={styles.div}>
         <input className={styles.input}
            type='search' 
            placeholder='Search by id...' 
            value={inputValue}
            onChange={handleChange}
         />

         <button className={styles.button}
            onClick={() => props.handleSearch(inputValue)}>Go!
         </button>

         <button className={styles.button}
            onClick={() => props.handleSearch(  Math.floor(Math.random() * 826 + 1)  )}>Surprise me!
         </button>
      </div>
   );
}