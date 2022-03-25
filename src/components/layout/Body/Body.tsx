import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ExpenseList from '../../../views/ExpenseList/ExpenseList'
import AddFriend from '../../../views/AddFriend/AddFriend'
import AddExpense from '../../../views/AddExpense/AddExpense'
import Balance from '../../../views/Balance/Balance'

export const LocationDisplay = () => {
    const location = useLocation()

    return <div data-testid="location-display">{location.pathname}</div>
}

export default function Body() {
    return (
        <Routes>
            <Route path="/" element={<ExpenseList />} />
            <Route path="expenses" element={<ExpenseList />} />
            <Route path="friend" element={<AddFriend />} />
            <Route path="expense" element={<AddExpense />} />
            <Route path="balance" element={<Balance />} />
            <LocationDisplay />
        </Routes>
    )
}
