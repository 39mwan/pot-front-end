import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListaGastos from '../views/ListaGastos/listaGastos'
import AnadirAmigo from '../views/AnadirAmigo/anadirAmigo'
import AnadirGasto from '../views/AnadirGasto/anadirGasto'
import Balance from '../views/Balance/balance'

function Body() {
    return (
        <Routes>
            <Route path="/" element={<ListaGastos />} />
            <Route path="lista-gastos" element={<ListaGastos />} />
            <Route path="amigo" element={<AnadirAmigo />} />
            <Route path="gasto" element={<AnadirGasto />} />
            <Route path="balance" element={<Balance />} />
        </Routes>
    )
}
export default Body
