import React from 'react';
import './App.css';
import Card from "./component.js";
import Homepage from "./assets/homepage"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Homepage}></Route>
            <Route path="/best-game-ever" component={Card}></Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
