import React from 'react';

export default class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          "id": 6,
          "name": "FridgeBuddy",
          "full_name": "RachelTWQ/FridgeBuddy",
          "description": "Fridge inventory app for multiple platforms powered by React, React Native, ASP.Net core, EF core, Axios, Serveo, MS SQL server and Twilio API",
          "language": "C#",
        },
        {
          "id": 5,
          "name": "chatty",
          "full_name": "RachelTWQ/chatty",
          "description": "Instant messenger built in React and WebSockets. Users can communicate with each other in a chat room without having to register accounts.  Frameworks: React, Express, Node, WebSockets, Webpack, babel",
          "language": "JavaScript",
        },
        {
          "id": 4,
          "name": "SOSFood",
          "full_name": "ferrazf/SOSFood", 
          "description": "SOSFood is a full stack web application built with Node.js, Express, AJAX, Twilio API, jQuery, HTML5, CSS3 and PosgreSQL.",
          "language": "JavaScript",
        },
        {
          "id": 3,
          "name": "jungle-rails",
          "full_name": "RachelTWQ/jungle-rails",
          "description": "An e-commerce Rails app built for learning Rails through example",
          "language": "Ruby",
        },
        {
          "id": 2,
          "name": "tweeter",
          "full_name": "RachelTWQ/tweeter",
          "description": "A twitter clone project, to help students gain front-end dev chops. Starter (incomplete) code.",
          "language": "JavaScript",
        },
        {
          "id": 1,
          "name": "TinyApp",
          "full_name": "RachelTWQ/TinyApp",
          "description": "RESTful URL Shortening service similar to TinyUrl. An HTTP Server is built to handle request from the browser which generates a shorten hash. This hash can be used to link back to the original url through our server.",
          "language": "JavaScript",
        }
      ]
    };
  }

  render() {
    return (
      <main>
        <h1>Projects</h1>
        {this.state.projects.map(project => (
          <div key={project.id} className="project-tab">
            <h3>{project.name}</h3>
            <p>{project.language}</p>
            <p>{project.description}</p>
            <a href={`https://github.com/${project.full_name}`} target="_blank" rel="noopener noreferrer">GITHUB</a>
          </div>
        ))}
      </main>
    )
  }
}