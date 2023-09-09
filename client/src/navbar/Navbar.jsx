import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbarContainer">
        <div className="logo">NarutoWorld</div>
        <ul className="links">
            <li>Home</li>
            <li>Watching Guide</li>
            <li><Link to={"/characterDex"} >CharacterDex</Link></li>
            <li>Villages</li>
            <li>Kekkei Genkai</li>
            <li>Quiz</li>
        </ul>
    </div>
  )
}

export default Navbar