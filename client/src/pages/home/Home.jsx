import React from 'react'
import Navbar from '../../navbar/Navbar'
import "./home.scss"

//Wallpaper
import pain from "../../wallpapers/painWp.mp4";
import home from "../../wallpapers/homepageWp.jpeg";
import naruto from "../../wallpapers/narutoLive.mp4"

//Component Imports
//Show Covers
import part1 from "../../watchingGuideImages/n1.jpg"
import part2 from "../../watchingGuideImages/n2.png"


const Home = () => {
  return (
    <div>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="homeContainer">
        <div className="introContainer">
        <video autoPlay muted loop id="myVideo">
  <source src={naruto} type="video/mp4"/>
</video>

        </div>
        <div className="storyContainer">
          <h1>Story</h1>
          <p>Naruto (ナルト) is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks to gain recognition from his peers and also dreams of becoming the Hokage, the leader of his village.</p>
          What its About, Why you should watch</div>
        <div className="watchingGuideContainer">
        <h1>Watching Guide</h1>
        <div className="watchingGuidePage">
            <div className="p1">
                <h2>Part 1 - Naruto</h2>
                <p>Naruto (ナルト) is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks to gain recognition from his peers and also dreams of becoming the Hokage, the leader of his village.</p>
                <img src={part1} alt="" />
                <button>Show More</button>

            </div>
            <div className="p2">
                <h2>Part 2 - Naruto Shippuden</h2>
                <p>“Naruto: Shippuden” is adapted from Part II of the “Naruto” comic book series by Masashi Kishimoto. It is set two and a half years after Part I in the Naruto universe, following the ninja teenager Naruto Uzumaki and his allies. The Number One Hyperactive Knuckehead Ninja has trained extensively with Ero Sennin (Jiraiya-sama) and returned to Konoha, and is more determined than ever to become the greatest ninja.</p>
                <img src={part2} alt="" />
                <button>Show More</button>
            </div>
        </div>

        </div>
        <div className="testimonials">Other opinions on naruto</div>
        
        
      </div>
      
    </div>
  )
}

export default Home