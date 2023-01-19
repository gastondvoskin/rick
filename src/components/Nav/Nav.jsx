import React from "react";
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './Nav.module.css';


export default function Nav({handleSearch}) {
    return (
        <nav className={styles.nav}>
            <SearchBar handleSearch={handleSearch} />
        </nav>
    )
}