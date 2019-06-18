import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './home.js';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={() => <Home />}/>
        <Route path='/projects' />
        <Route path='/contact' />
      </Switch>
    </Router>
  );
}

export default App;
