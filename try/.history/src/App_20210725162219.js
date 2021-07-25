import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Fav from './compoments/Fav';
import NavBar from './compoments/NavBar';
import Home from './compoments/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
           <NavBar />
             <Switch>

                <Route exact path="/">
                     {this.prop}<Home />

                </Route>
                <Route exact path="/favorite">
                    <Fav />
               </Route>
             </Switch>
      </BrowserRouter>
    )
  }
}

export default withAuth0(App)

