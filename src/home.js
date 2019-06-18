import React from 'react';
import profileImg from './Rachel.jpg';

export default function Home() {
  return (
    <main>
      <div className='profileImg'>
        <img src={ profileImg } alt='profile' />
      </div>
      <div className='infoTab'>
        <h1>Rachel Tang</h1>
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