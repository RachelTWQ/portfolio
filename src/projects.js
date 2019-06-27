import React from 'react';
import './projects.css';

const data = [
  {
    "id": 6,
    "name": "FridgeBuddy",
    "full_name": "RachelTWQ/FridgeBuddy",
    "description": "Fridge inventory full-stack web app for both website and mobile. Users can easily create inventory list to keep track of items in the fridge and customize when to receive text message reminder.",
    "language": "C#/JavaScript/HTML/CSS",
    "framework": "React, React Native, ASP.Net core, EF core, docker, Axios, Serveo, MS SQL server, Twilio API"
  },
  {
    "id": 5,
    "name": "Chatty",
    "full_name": "RachelTWQ/chatty",
    "description": "Instant messenger built with React and WebSockets. Users can communicate with each other in a chat room without having to register accounts.",
    "language": "JavaScript/HTML/CSS",
    "framework": "React, Express, Node, WebSockets, Webpack, babel"
  },
  {
    "id": 4,
    "name": "SOSFood",
    "full_name": "ferrazf/SOSFood",
    "description": "SOSFood is a full-stack web app which mimics food pick up apps like Ritual. This app allows users to create food orders on our web page which will then send SMS message to both the owner of the restaurant as well as the customer.",
    "language": "JavaScript/HTML/CSS",
    "framework": "Node, Express, AJAX, Twilio API, jQuery, HTML5, CSS3, PostgreSQL"
  },
  {
    "id": 3,
    "name": "Jungle-rails",
    "full_name": "RachelTWQ/jungle-rails",
    "description": "An e-commerce Ruby on Rails app built for learning MVC through debugging and refactoring existing code. Users can place order and receive email notification.",
    "language": "Ruby/HTML/CSS",
    "framework": "Ruby on Rails, ERB, RSpec, Active Record, PostgreSQL, Stripe"
  },
  {
    "id": 2,
    "name": "Tweeter",
    "full_name": "RachelTWQ/tweeter",
    "description": "A twitter clone single-page application (SPA) project which is powered by AJAX. It displays a list of existing tweets from database and allows posting new tweets.",
    "language": "JavaScript/HTML/CSS",
    "framework": "jQuery, Express, Node, AJAX, MongoDB"
  },
  {
    "id": 1,
    "name": "TinyApp",
    "full_name": "RachelTWQ/TinyApp",
    "description": "RESTful URL Shortening service similar to TinyUrl. TinyApp is a full stack web app built with Node and Express. An HTTP Server is built to handle request from the browser which generates a shorten hash. This hash can be used to link back to the original url through the server.",
    "language": "JavaScript",
    "framework": "Express, Node, EJS, Bootstrap"
  }
];

export default class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentWillMount() {
    this.setState({
      projects: data
    });
  }

  render() {
    return (
      <main>
        <section className="projects">
          <h1><strong>PROJECTS</strong></h1>
          <span>(click card to see github repository)</span>
        </section>
       <section className="cards-wrapper">
        {this.state.projects.map(project => (
          <div key={project.id} className="card-grid-space">
          <a className="card" href={`https://github.com/${project.full_name}`} target="_blank" rel="noopener noreferrer">
            <div>
              <h1>{project.name}</h1>
              <p>{project.description}</p>
            </div>
            <div className="tags">
              <div className="tag">{project.language}</div>
              <div className="tag">{project.framework}</div>
            </div>
          </a>
        </div>
        ))}
        </section>
      </main>
    )
  }
}