import React from 'react'
import { Nav, NavLink } from './NavBarElements'

function NavBar() {
    return (
        <Nav>
            <NavLink to="/listaGastos">Lista de gastos</NavLink>
            <NavLink to="/balance">Ver balance</NavLink>
            <NavLink to="/añadirAmigo">Añadir amigo/a</NavLink>
            <NavLink to="/añadirGasto">Añadir gasto</NavLink>
        </Nav>
    )
}

export default NavBar
