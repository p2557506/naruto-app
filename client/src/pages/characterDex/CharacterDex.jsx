import React from 'react'
import "./characterDex.scss"

import { useEffect,useState } from 'react'
import axios from 'axios'
import Navbar from '../../navbar/Navbar';
import { Link } from 'react-router-dom';

//Axios to allow api request using react app

const CharacterDex = () => {

  const [characters,setCharacters] = useState();


  

  useEffect(() =>{
    const fetchAllCharacters = async () =>{
      try {
        const response = await axios.get("https://dattebayo-api.onrender.com/characters");
        
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllCharacters();
  },[])

  
  
  

  return (
    <div className="characterDexContainer">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="header">
        <h1>Characters</h1>
        
      </div>
      <div className="characterGroupContainer">
        <div className="item">
          <img src="https://www.quizexpo.com/wp-content/uploads/2020/11/cover3.jpg" alt="" />
          <h3 className="groupSelect"><Link to ={"/characters"}>Characters</Link></h3>
        </div>
        <div className="item">
          <img src="https://qph.cf2.quoracdn.net/main-qimg-0df0e6cc632239836d8786e3bb8c0ec2" alt="" />
          <h3 className="groupSelect"><Link to={"/akatsuki"}>Akatsuki</Link></h3>
        </div>
        <div className="item">
          <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/08/naruto-all-tailed-beasts.jpg" alt="" />
          <h3 className="groupSelect"><Link to ={"/tailedBeasts"}>Tailed Beasts</Link></h3>
        </div>
        
      </div>
    </div>
  )
}

export default CharacterDex