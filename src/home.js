import React from 'react';
import profileImg from './Rachel.jpg';

export default function Home() {
  return (
    <main className="main-tab">
      <div className="profile-imgage">
        <img src={ profileImg } alt='profile' />
      </div>
      <div className="info">
        <h1>Full Stack Web Developer</h1>
        <div>
          <a href="https://linkedin.com/in/weiquan-rachel-tang/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/RachelTWQ" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        </div>
        <hr/>
        <h3>
          JavaScript | HTML/CSS | C# | Ruby
        </h3>
        <h3>
          React | NodeJS | Express | JQuery | ASP.net | Entity Framework | Rails | SQL | MongoDB
        </h3>       
      </div>
    </main>
  )
}