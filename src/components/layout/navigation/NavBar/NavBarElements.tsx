import React from 'react'

import { NavLink as Link } from 'react-router-dom'
import type { LinkProps } from 'types/links'

import './NavBarElements.css'

function Header() {
    function NavLink(props: LinkProps) {
        return (
            <li>
                <Link to={props.route}>{props.name}</Link>
            </li>
        )
    }

    return (
        <nav>
            <h1>Gastos compartidos</h1>
            <ul>
                <NavLink route="expenses" name="Lista gastos" />
                <NavLink route="balance" name="Ver balance" />
                <NavLink route="friend" name="Añadir amigo/a" />
                <NavLink route="expense" name="Añadir gasto" />
            </ul>
        </nav>
    )
}

export default Header
