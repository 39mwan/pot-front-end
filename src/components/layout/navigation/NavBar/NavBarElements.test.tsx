import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './NavBarElements'
import { BrowserRouter } from 'react-router-dom'

test('renders navlink "Lista gastos"', () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const navLinkExpenses = screen.getByText('Lista gastos')
    expect(navLinkExpenses).toBeDefined()
})

test('renders navlink "Ver balance"', () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const navLinkExpenses = screen.getByText('Ver balance')
    expect(navLinkExpenses).toBeDefined()
})

test('renders navlink "Añadir amigo/a"', () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const navLinkExpenses = screen.getByText('Añadir amigo/a')
    expect(navLinkExpenses).toBeDefined()
})

test('renders navlink "Añadir gasto', () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const navLinkExpenses = screen.getByText('Añadir gasto')
    expect(navLinkExpenses).toBeDefined()
})
