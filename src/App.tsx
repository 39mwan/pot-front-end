import React from 'react'
import Header from './components/layout/navigation/NavBar/NavBarElements'
import Body from './components/Body'
import { BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Body />
            </BrowserRouter>
        </>
    )
}

export default App
