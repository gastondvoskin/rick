import React from "react";
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './Nav.module.css';


export default function Nav(props) {
    return (
        <nav className={styles.nav}>
            <SearchBar handleSearch={props.handleSearch} />
        </nav>
    )
}