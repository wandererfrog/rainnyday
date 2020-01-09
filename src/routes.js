import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";

import App from './App'
import NewLocation from './components/NewLocation/NewLocation'  

function routes(){
    console.log(12312)
    return (
        <Router>
            <Switch>
                <Route path="/new">
                    <NewLocation />
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </Router>
    )
}

export default routes;