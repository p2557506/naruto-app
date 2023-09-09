import React from 'react'
import "./home.scss"

//Component Imports
import Navbar from '../navbar/Navbar'

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="introductionContainer">
        <div className="header">
          <h1>WELCOME TO THE WORLD OF NARUTO UZUMAKI!</h1>
        </div>
        <div className="homeDescription">
          <p>Naruto is a japanese manga/anime written and illustrated by Masashi Kishimoto. Naruto Uzumaki is a tenacious young shinobi eager to win recognition from his peers who resent him because of the demon fox contained within him. His dream? To become the leader of the hidden leaf village, the Hokage!</p>
        </div>
      </div>
    </div>
  )
}

export default Home