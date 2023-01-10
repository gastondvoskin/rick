import React from "react"
import styled from "styled-components"
import SearchBar from './SearchBar.jsx'
// import characters, { Rick } from '../data.js'

const NavContenedor = styled.nav`
    
`

export default function Nav(props) {
    return (
        <NavContenedor>
            <SearchBar 
                onSearch={(characterID) => window.alert('characterID')}
            />
        </NavContenedor>
    )
}