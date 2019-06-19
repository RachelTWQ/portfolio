import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className='nav'>
            <Link to='/'>Rachel Tang</Link>
            <a href='https://resume.creddle.io/resume/e0p2fjjet2f'>Resume</a>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}