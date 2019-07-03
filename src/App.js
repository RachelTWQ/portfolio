import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './home.js';
import Nav from './nav.js';
import Contact from './contact.js';
import Projects from './projects.js';

import Particles from 'react-particles-js';
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
const particleParams = {
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "speed": 8,
        "size_min": 1
      }
    },
    "color": {
      "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "random": true,
      "speed": 1,
      "direction": "top",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      }
    },
    "modes": {
      "bubble": {
        "distance": 250,
        "duration": 2,
        "size": 0,
        "opacity": 0
      },
      "repulse": {
        "distance": 400,
        "duration": 4
      }
    }
  }
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Particles className="particles" params={particleParams} />
      <Nav />
      <Switch>
        <Route exact path='/' component={() => <Home />} />
        <Route path='/projects' component={() => <Projects />} />
        <Route path='/contact' component={() => <Contact />} />
      </Switch>
    </Router>
  );
}

export default App;
