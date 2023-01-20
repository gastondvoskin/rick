import React from "react";
import { NavLink, Route } from "react-router-dom";
import About from "../About/About.jsx";
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './Nav.module.css';


export default function Nav(props) {
    return (
        <nav className={styles.nav}>
            <button onClick={props.handleLogout}>
                <NavLink to="/">LOGOUT</NavLink>
            </button>

            <button>
                <NavLink to="/home">HOME</NavLink>
            </button>

            <button>
                <NavLink to="/about">ABOUT</NavLink>
            </button> 

            <SearchBar handleSearch={props.handleSearch} />       
        </nav>
    )
}