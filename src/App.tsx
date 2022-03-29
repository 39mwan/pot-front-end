import React from 'react'
import Header from './components/layout/navigation/NavBar/NavBarElements'

import { BrowserRouter } from 'react-router-dom'
import Body from './components/layout/Main/Body/Body'

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
