import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './home.js';
import Nav from './nav.js';
import Contact from './contact.js';
import Projects from './projects.js';
import './App.css';

// const container = (WrappedComponent) => {
//   class Container extends React.Component {
//     render() {
//       return (
//         <WrappedComponent />
//       )
//     }
//   }
//   return Container;
// }

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={() => <Home />}/>
        <Route path='/projects' component={() => <Projects />}/>
        <Route path='/contact' component={() => <Contact />}/>
      </Switch>
    </Router>
  );
}

export default App;
