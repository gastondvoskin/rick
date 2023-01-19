import React from "react"
import styled from "styled-components"
import SearchBar from './SearchBar.jsx'

const NavContenedor = styled.nav`
    background-color: #abf3b0;
    height: 55px;
    border: solid 1px green;
    

`

export default function Nav({onSearch}) {
    return (
        <NavContenedor>
            <SearchBar 
                onSearch={onSearch}
            />
        </NavContenedor>
    )
}