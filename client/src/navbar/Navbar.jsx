import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbarContainer">
        <div className="logo">NarutoWorld</div>
        <ul className="links">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/watchingGuide"}>Watching Guide</Link></li>
            <li><Link to={"/characterDex"}>CharacterDex</Link></li>
            <li><Link to={"/villages"}>Villages</Link></li>
            
            <li><Link to={"/kekkeiGenkai"}>Kekkei Genkai</Link></li>
            
        </ul>
    </div>
  )
}

export default Navbar