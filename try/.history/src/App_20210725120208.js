import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Fav from './compoments/Fav';
import NavBar from './compoments/NavBar';
import Home from './compoments/Home';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
           <NavBar />
             <Switch>

                <Route exact path="/">
                     <Home />

                </Route>
                <Route exact path="/fav">
                      <Fav />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App

