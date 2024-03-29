import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Room from './pages/Room'

import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/:room_id" component={Room}/>
                </Switch>
            </Router>
        )
    }
}

export default App;
