import React from 'react'
import Navbar from '../../navbar/Navbar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import "./kekkeiGenkai.scss"

import boilReleaseImage from "../../kekkeiGenkaiImages/boilRelease.png"
import byakuganImage from "../../kekkeiGenkaiImages/byakugan.png"
import crystalReleaseImage from "../../kekkeiGenkaiImages/crystalRelease.png"
import darkReleaseImage from "../../kekkeiGenkaiImages/darkRelease.png"
import mangekyoImage from "../../kekkeiGenkaiImages/mangekyoSharingan.png"
import explosionReleaseImage from "../../kekkeiGenkaiImages/explosionRelease.png"
import iburiClanKekkiImage from "../../kekkeiGenkaiImages/iburiClanKekkeiGenkai.png"
import iceReleaseImage from "../../kekkeiGenkaiImages/iceRelease.png"
import isshikiDojutsuImage from "../../kekkeiGenkaiImages/isshiki'sDojutsu.png"
import joganImage from "../../kekkeiGenkaiImages/jogan.png"
import jugoClanImage from "../../kekkeiGenkaiImages/jugoClanKekkeiGenkai.png"
import ketsuryuganImage from "../../kekkeiGenkaiImages/ketsuryugan.png"
import kuramaClanImage from "../../kekkeiGenkaiImages/kuramaClanKekkeiGenkai.png"
import lavaReleaseImage from "../../kekkeiGenkaiImages/lavaRelease.png"
import magnetReleaseImage from "../../kekkeiGenkaiImages/magnetRelease.png"



const KekkeiGenkai = () => {

    const [kekkeiGenkai,setKekkeiGenkai] = useState([]);
    const key = "kekkei-genkai"
    useEffect(() =>{
        const fetchAllKekkeiGenkai = async () =>{
        try {
            const res = await axios.get("https://dattebayo-api.onrender.com/kekkei-genkai");
            setKekkeiGenkai(res.data[key]);
            console.log(res.data[key]);
        } catch (error) {
            console.error(error);
        }
        }
        fetchAllKekkeiGenkai();
    },[])
    let id = null;

    
    
    return (
        <div>
        <div><Navbar/></div>
        <h1>Kekkei Genkai</h1>
        <div className="kekkeiGenkaiWrapper">
        {kekkeiGenkai.map(kekkeiGenkaiItem=>(
            <div className="kekkeiGenkaiItemBox" key={kekkeiGenkaiItem.id}>
                   
                        <div className="kekkeiGenkaiName">{kekkeiGenkaiItem.name}</div>
                        <div className="kekkeiGenkaiImage">
                        {(() => {
                            switch (kekkeiGenkaiItem.id) {
                            case 0:
                                return <img src={boilReleaseImage} />;
                            case 1:
                                return <img src={byakuganImage} />;
                            case 2:
                                return <img src={crystalReleaseImage} />;
                            case 3:
                                return <img src={darkReleaseImage} />;
                            case 4:
                                return <img src={mangekyoImage} />;
                            case 5:
                                return <img src={explosionReleaseImage} />;
                            case 6:
                                return <img src={iburiClanKekkiImage} />;
                            case 7:
                                return <img src={iceReleaseImage} />;
                            case 8:
                                return <img src={isshikiDojutsuImage} />;
                            case 9:
                                return <img src={byakuganImage} />;
                            case 10:
                                return <img src={joganImage} />;
                            case 11:
                                return <img src={jugoClanImage} />;
                            case 12:
                                return <img src={ketsuryuganImage} />;
                            case 13:
                                return <img src={kuramaClanImage} />;
                            case 14:
                                return <img src={lavaReleaseImage} />;
                            case 15:
                                return <img src={byakuganImage} />;
                            case 16:
                                return <img src={byakuganImage} />;
                            case 17:
                                return <img src={magnetReleaseImage} />;
                            case 18:
                                return <img src={byakuganImage} />;
                            case 19:
                                return <img src={mangekyoImage} />;
                            default:
                                
                                return null;
                            }
                        })()}
                            
                        </div>
                        

                    
                    </div>
            ))}
            <div>
                
                Left over kekkei genkai3
            </div>
            
        </div>
    </div>
  )
}

export default KekkeiGenkai
