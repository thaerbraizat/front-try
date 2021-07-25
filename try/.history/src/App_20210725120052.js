import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from './compoments/NavBar';

export class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <NavBar / >
     <Switch>

<Route exact path="/">
<Home/>
</Route>
<Route exact path="/fav">
<>
</Route>


     </Switch>
     
     </BrowserRouter>
    )
  }
}

export default App

