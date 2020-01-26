import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";

import App from './App'
import About from './components/About/About'
import NewLocation from './components/NewLocation/NewLocation'  

function routes(){
    return (
        <Router>
            <Switch>
                <Route path="/new">
                    <NewLocation />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </Router>
    )
}

export default routes;