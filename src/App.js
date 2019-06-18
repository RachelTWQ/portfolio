import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' />
        <Route path='/projects' />
        <Route path='/contact' />
      </Switch>
    </Router>
  );
}

export default App;
