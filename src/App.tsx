import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Nav } from './components/layout/navigation/NavBar/NavBarElements'
import NavBar from './components/layout/navigation/NavBar/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import AñadirAmigo from './src/views/AñadirAmigo';

function App() {
    return (
        /* <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={AñadirAmigo} />
                <Route path='/about' component={About} />
                <Route path='/events' component={Events} />
                <Route path='/annual' component={AnnualReport} />
                <Route path='/team' component={Teams} />
                <Route path='/blogs' component={Blogs} />
                <Route path='/sign-up' component={SignUp} />
            </Switch>
        </Router>*/
        <h1> Hola</h1>
    )
}

export default App
