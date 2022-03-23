import React from 'react'

import { NavLink as Link } from 'react-router-dom'
import type { LinkProps } from 'types/links'

import './NavBarElements.css'

function Header() {
    function NavLink(props: LinkProps) {
        return (
            <li>
                <Link to={props.ruta}>{props.nombre}</Link>
            </li>
        )
    }

    return (
        <nav>
            <h1>Gastos compartidos</h1>
            <ul>
                <NavLink ruta="lista-gastos" nombre="Lista gastos" />
                <NavLink ruta="balance" nombre="Ver balance" />
                <NavLink ruta="amigo" nombre="Añadir amigo/a" />
                <NavLink ruta="gasto" nombre="Añadir gasto" />
            </ul>
        </nav>
    )
}

export default Header
