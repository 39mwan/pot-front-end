import React from 'react'
import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import AnadirAmigo from './views/AnadirAmigo/anadirAmigo'
import AnadirGasto from './views/AnadirGasto/anadirGasto'
import Balance from './views/Balance/balance'
import ListaGastos from './views/ListaGastos/listaGastos'

function App() {
    return (
        <div className="App">
            <Link to="lista-gasto">Lista gastos</Link>
            <br />
            <Link to="balance">Ver balance</Link>
            <br />
            <Link to="amigo">Añadir amigo/a</Link>
            <br />
            <Link to="gasto">Añadir gasto</Link>
            <br />

            <Routes>
                <Route path="/" />
                <Route path="lista-gasto" element={<ListaGastos />} />
                <Route path="amigo" element={<AnadirAmigo />} />
                <Route path="gasto" element={<AnadirGasto />} />
                <Route path="balance" element={<Balance />} />
            </Routes>
        </div>
    )
}

export default App
