import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ListaGastos from '../../../../views/ListaGastos/listaGastos'
import AnadirAmigo from '../../../../views/AnadirAmigo/anadirAmigo'
import AnadirGasto from '../../../../views/AnadirGasto/anadirGasto'
import Balance from '../../../../views/Balance/balance'

import './Body.css'

function Body() {
    const location = useLocation()

    function Title() {
        let pageName
        switch (location.pathname) {
            case '/lista-gastos':
                pageName = 'LISTA DE GASTOS'
                break
            case '/amigo':
                pageName = 'AÑADIR AMIGO/A'
                break
            case '/gasto':
                pageName = 'AÑADIR GASTO'
                break
            case '/balance':
                pageName = 'VER BALANCE'
                break
        }
        return <>{pageName}</>
    }

    return (
        <main>
            <div className="recuadro">
                <h2>
                    <Title />
                </h2>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ListaGastos />} />
                        <Route path="lista-gastos" element={<ListaGastos />} />
                        <Route path="amigo" element={<AnadirAmigo />} />
                        <Route path="gasto" element={<AnadirGasto />} />
                        <Route path="balance" element={<Balance />} />
                    </Routes>
                </div>
            </div>
        </main>
    )
}

export default Body
