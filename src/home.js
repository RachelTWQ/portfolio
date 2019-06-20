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
        <hr/>
        <h3>
          JavaScript | HTML/CSS | C# | Ruby
        </h3>
        <h3>
          React | NodeJS | Express | JQuery | ASP.net | Entity Framework | Rails | SQL | MongoDB
        </h3>
        {/* logo for github and linkedin */}
      </div>
    </main>
  )
}