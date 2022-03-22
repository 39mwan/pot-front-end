import React from 'react'
import { NavLink as Link } from 'react-router-dom'

import './NavBarElements.css'

function Header() {
    return (
        <nav>
            <h1>Gastos compartidos</h1>
            <ul>
                <li>
                    <Link to="lista-gasto">Lista gastos</Link>
                </li>
                <li>
                    <Link to="balance">Ver balance</Link>
                </li>
                <li>
                    <Link to="amigo">Añadir amigo/a</Link>
                </li>
                <li>
                    <Link to="gasto">Añadir gasto</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header
