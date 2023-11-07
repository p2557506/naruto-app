import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import "./charactersPage.scss";
import { Link } from 'react-router-dom';
const CharactersPage = () => {

    const [characters,setCharacters] = useState([]);

    useEffect(() =>{
        const fetchAllCharacters = async () =>{
        try {
            const res = await axios.get("https://dattebayo-api.onrender.com/characters");
            setCharacters(res.data.characters);
            console.log(res.data.characters);
        } catch (error) {
            console.error(error);
        }
        }
        fetchAllCharacters();
    },[])

  return (
    <div>
        <div><Navbar/></div>
        <h1>Characters</h1>
        <div className="charactersWrapper">

            {characters.map(character=>(
                <div className="charactersItemBox" key={character.id}>
                   
                        <Link Link to={`/character/${character.id}`}><div className="characterName">{character.name}</div></Link> 
                        <div className="characterImage"><img src={character.images[0]} alt="React Image" /></div>
                        

                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default CharactersPage