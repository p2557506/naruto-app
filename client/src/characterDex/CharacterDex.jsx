import React from 'react'
import Navbar from '../navbar/Navbar'
import { useEffect,useState } from 'react'
import axios from 'axios'

//Axios to allow api request using react app

const CharacterDex = () => {

  const [characters,setCharacters] = useState([]);

  useEffect(() =>{
    const fetchAllCharacters = async ()=>{
      try {
        const res = await axios.get("https://narutodb.xyz/api/character");
        console.log(res);
      } catch (error) {
        console.log(error)
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
      <div className="charactersContainer">
        <div className="characterBox"></div>
      </div>
    </div>
  )
}

export default CharacterDex