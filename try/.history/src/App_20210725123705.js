import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Fav from './compoments/Fav';
import NavBar from './compoments/NavBar';
import Home from './compoments/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
           <NavBar />
             <Switch>

                <Route exact path="/">
                     <Home />

                </Route>
                <Route exact path="/favorite">
                    <Fav />
               </Route>
             </Switch>
      </BrowserRouter>
    )
  }
}

export default App

