import React from 'react'

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
      <div className="characterDexDescription">
        <p>Search and look through all characters in the naruto universe!</p>
      </div>
      <ul className="characterGroupContainer">
        <Link to={"/akatsuki"}><li>Akatsuki</li></Link>
        
        <li>Tailed Beasts</li>
        <li>Team 7</li>
        <li>Kage</li>
        
      </ul>
    </div>
  )
}

export default CharacterDex