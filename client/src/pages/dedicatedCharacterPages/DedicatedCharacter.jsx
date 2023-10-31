import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';

const DedicatedCharacter = () => {

    const location = useLocation();
    const characterId = location.pathname.split("/")[2];
    console.log(characterId);

    //All institutions stored inside useState
    const [character,setCharacter] = useState([]);
    const [id,setId] = useState()
    //Charcater Details
    const [characterName,setCharacterName] = useState("")
    const [signatureJutsu,setSignatureJutsu] = useState("")
    const [ninjaRank,setNinjaRank] = useState("")
    

    useEffect(() => {
        const fetchSpecificCharacter = async ()=> {
            try {
                const res = await axios.get(`https://dattebayo-api.onrender.com/characters/${characterId}`);
                setId(res.data.id)
                console.log(res.data);
                setCharacterName(res.data.name)
                
                setNinjaRank(res.data.personal.classification[0])
                
                
                
            } catch (err) {
                console.log(err);
            }
        }
        
        fetchSpecificCharacter()
        
    },[])
    {/**Check if character is specific charcater then change page accordingly SWITCH/CASE */}

    

  return (
    <div>
        <div><Navbar/></div>
        <h1>{characterName}</h1>
        <div className="dedicatedCharacterContainer">

            <div className="signatureJutsu">
                {signatureJutsu}
            </div>
            <div className="">
                <div>Ninja Rank: {ninjaRank} </div>
            </div>
        </div>
    </div>
  )
}

export default DedicatedCharacter