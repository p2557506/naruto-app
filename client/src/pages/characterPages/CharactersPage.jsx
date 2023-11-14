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

    //Info 
    //Jutsu, Clan, Powers , Rank
  return (
    <div>
        <div><Navbar/></div>
        <h1>Characters</h1>
        <div className="charactersWrapper">

            {characters.map(character=>(
                <div className="characterItemBox" key={character.id}>

                    
                        <h3 className="characterName">{character.name} </h3>
                   
                        <Link to ={`/character/${character.id}`}><img src={character.images[0]} alt="" /></Link>
                        
                        

                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default CharactersPage