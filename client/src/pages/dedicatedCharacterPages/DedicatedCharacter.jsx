import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';

import "./dedicatedCharacter.scss"

//Kekkei
import mangekyoImage from "../../kekkeiGenkaiImages/mangekyoSharingan.png"
import eternalMangekyo from "../../kekkeiGenkaiImages/madaraEternalSharingan.png"
import okSharingan from "../../kekkeiGenkaiImages/okSharingan.png"
import woodRelease from "../../kekkeiGenkaiImages/woodRelease.png"
import sharingan from "../../kekkeiGenkaiImages/sharingan.png"

//Jutsu
import tsukuyomi from "../../jutsuImages/Tsukuyomi.webp"
import susanoo from "../../jutsuImages/madara-madara-susanoo.gif"
import shadowClone from "../../jutsuImages/shadowClone.gif"
import chidori from "../../jutsuImages/chidori.gif"
import thousand from "../../jutsuImages/thousandHands.gif"
import kamui from "../../jutsuImages/kamui.gif"
import rasengan from "../../jutsuImages/rasengan.gif"
import fireball from "../../jutsuImages/fireball.gif"

const DedicatedCharacter = () => {

    const location = useLocation();
    const characterId = location.pathname.split("/")[2];
    console.log(characterId);

    const img = <img src={tsukuyomi} alt="" />

    //All institutions stored inside useState
    const [character,setCharacter] = useState([]);
    const [id,setId] = useState()
    //Charcater Details
    const [characterName,setCharacterName] = useState("")
    const [signatureJutsu,setSignatureJutsu] = useState("")
    const [ninjaRank,setNinjaRank] = useState("")
    const [kekkeiGenkai, setKekkeiGenkai] = useState([]);
    const [image,setImage] = useState("");
    

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
                setImage(res.data.images[0])
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
        <div className="characterPage">

        
        <div className="characterProfile">

            <h1>{characterName}</h1>
            <img src={image} alt="" />
        </div>
        
        <div className="dedicatedCharacterContainer">
            <h2>Abilities</h2>
            <div className="abilities">

            {/**Check id to choose justu justu */}
            <div className="signatureJutsu">
                {(() => {
                    switch (id) {
                        case 376:
                            return <div className="jutsu">
                                    {signatureJutsu[1]}
                                    <img src={chidori} alt="" />
                                    
                                </div>
                        case 865:
                            return <div className="jutsu">
                                    {signatureJutsu[16]}
                                    <img src={rasengan} alt="" />
                                    
                                </div>
                        case 1293:
                            return <div className="jutsu">
                                    {signatureJutsu[20]}
                                    <img src="" alt="" />
                                    
                                </div>
                        case 1063:
                            return <div className="jutsu">
                                    {signatureJutsu[6]}
                                    <img src={thousand} alt="" />
                                    
                                </div>
                        case 1303:
                            return <div className="jutsu">
                                    {signatureJutsu[16]}
                                    <img src={kamui} alt="" />
                                    
                                </div>
                            case 1307:
                                return <div className="jutsu">
                                        {signatureJutsu[29]}
                                        <img src={fireball} alt="" />
                                        
                                    </div>
                            case 1299:
                                return <div className="jutsu">
                                    {signatureJutsu[39]}
                                        <img src={susanoo} alt="" />

                                </div> 
                                case 1344:
                                    return <div className="jutsu">
                                        {signatureJutsu[26]}
                                            <img src={shadowClone} alt="" />
    
                                    </div> 
                            default:
                                
                                return null;
                            }
                        })()}
            </div>
            
            
            <div className="kekkeiGenkai">
                <div className ="kekkeiGenkaiName"><span>Kekkei Genkai</span><span></span></div>
                
                {(() => {
                    switch (id) {
                        case 376:
                            return <img src={okSharingan} alt="" /> ;
                        
                        case 1063:
                            return <img src={woodRelease} alt="" /> ;
                        case 1293:
                            return <img src={mangekyoImage} alt="" /> ;
                        case 1303:
                            return <img src={okSharingan} alt="" /> ;
                        case 1307:
                        return <img src={sharingan} alt="" /> ;
                        case 1299:
                            return <img src={eternalMangekyo} alt="" /> ;
                        
                            default:
                                
                                return "N/A";
                            }
                        })()}
            </div>
            
            
            </div>
        </div>
        <div className="characterBriefBio">
            <h3>Character Bio:</h3>
        {(() => {
                            switch (id) {
                            case 376:
                                return <p>
                                Kakashi graduated from the Ninja Academy and became a Genin, when he was merely 5 years old, then at 6 years old, became a Chuunin. He later became a Jounin and a member of the AnBu Assasination squad for Hidden Leaf Village. We see him as he takes up the role as being a sensei for the new Chunnins.
                                </p> ;
                            case 865:
                                return <p>
                                Minato Namikaze (波風ミナト, Namikaze Minato) was the Fourth Hokage of Konohagakure, although he was Lord Fourth, he also had the shortest reign of Hokage. He was famous in life for his speed, leading to the moniker of Yellow Flash of the Leaf (木ノ葉の黄色い閃光, Konoha no Kiiroi Senkō).
                                </p> ;
                            case 1063:
                                return <p>
                                Hashirama Senju was a member of the famous Senju clan and he was one of the founders and also the First Hokage of the Leaf Village.
                                Hashirama sought peace for the shinobi world. To achieve that end founded Konoha with his clan, his childhood friend and rival Madara Uchiha, and the Uchiha clan.
                                </p> ;
                            case 1303:
                                return <p>
                                Obito Uchiha (うちはオビト, Uchiha Obito) was a member of Konohagakure's Uchiha clan. He was believed to have died during the Third Shinobi World War, his only surviving legacy being the Sharingan he gave to his teammate, Kakashi Hatake.
                                </p> ;
                            case 1307:
                                return <p>
                                Sasuke Uchiha (うちはサスケ, Uchiha Sasuke) is one of the last surviving members of Konohagakure's Uchiha clan. After his older brother, Itachi, slaughtered their clan, Sasuke made it his mission in life to avenge them by killing Itachi. He is added to Team 7 upon becoming a ninja 
                                </p> ;
                            case 1293:
                                return <p>
                                Itachi is a member of the Uchiha Clan from the village of Konohagakure and the elder brother of Sasuke Uchiha. He grew up as the child prodigy of the Uchiha clan, establishing milestones for not only Sasuke, but also for future Uchiha to live up to.
                                </p> ;
                            case 1299:
                                return <p>Madara was born during the Warring States Period, and was the eldest of Tajima Uchiha's five children. Madara and his siblings grew up on the battlefield waging constant war with the Uchiha's rivals: the Senju. Three of his siblings died young, leaving Madara with only his younger brother, Izuna.</p>
                            case 1344:
                                return <p>He is a ninja from the fictional Hidden Leaf Village (Japanese: 木ノ葉隠れ, Hepburn: konohagakure). As a boy, Naruto is ridiculed and ostracized on account of the Nine-Tailed Demon Fox—a malevolent creature that attacked Konohagakure—that was sealed away in his body..</p>
                            default:
                                
                                return null;
                            }
                        })()}
            
        </div>
        </div>
    </div>
  )
}

export default DedicatedCharacter