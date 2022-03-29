import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import './Body.css'
import ExpenseList from '../../../../views/ExpenseList/ExpenseList'
import AddFriend from '../../../../views/AddFriend/AddFriend'
import AddExpense from '../../../../views/AddExpense/AddExpense'
import Balance from '../../../../views/Balance/Balance'

function Body() {
    const location = useLocation()

    function Title() {
        let pageName
        switch (location.pathname) {
            case '/expenses':
                pageName = 'LISTA DE GASTOS'
                break
            case '/friend':
                pageName = 'AÑADIR AMIGO/A'
                break
            case '/expense':
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
                        <Route path="/" element={<ExpenseList />} />
                        <Route path="expenses" element={<ExpenseList />} />
                        <Route path="friend" element={<AddFriend />} />
                        <Route path="expense" element={<AddExpense />} />
                        <Route path="balance" element={<Balance />} />
                    </Routes>
                </div>
            </div>
        </main>
    )
}

export default Body
