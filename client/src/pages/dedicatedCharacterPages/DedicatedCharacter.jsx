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
    const [kekkeiGenkai, setKekkeiGenkai] = useState([]);
    

    useEffect(() => {
        const fetchSpecificCharacter = async ()=> {
            try {
                const res = await axios.get(`https://dattebayo-api.onrender.com/characters/${characterId}`);
                setId(res.data.id)
                console.log(res.data);
                setCharacterName(res.data.name)
                setSignatureJutsu(res.data.jutsu)
                setNinjaRank(res.data.personal.classification[0])
                setKekkeiGenkai(res.data.personal.kekkeiGenkai)
                console.log(res.data.personal.kekkeiGenkai)
                
                
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
        <div className="dedicatedCharacterContainer" style={{backgroundImage:'https://imgs.search.brave.com/KXN9ZMBXBNDkfCDuPFULGOkqSaiGyJ49kzvU96RqgEA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTUy/NTE5LmpwZw'}}>
            {/**Check id to choose justu justu */}
            <div className="signatureJutsu">
                Signature Jutsu:{id == 1293 ? signatureJutsu[20]:null}
            </div>
            <div>
                <div className="rank">Ninja Rank: {ninjaRank} </div>
                <div className="kekkaiGenkai">Kekkai Genkai: {kekkeiGenkai[0]} {kekkeiGenkai[1]}</div>
            </div>
        </div>
    </div>
  )
}

export default DedicatedCharacter