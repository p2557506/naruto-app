import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';

import image from "../../tailedBeastImages/kuruma.webp"

const TailedBeasts = () => {

    const [tailedBeasts,setTailedBeasts] = useState([]);

    const tB = "tailed-beasts";
    const key = "tailed-beasts"

    useEffect(() =>{
        const fetchAllTailedBeasts = async () =>{
        try {
            const response = await axios.get("https://dattebayo-api.onrender.com/tailed-beasts");
            setTailedBeasts(response.data[key].sort())
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
        }
        fetchAllTailedBeasts();
    },[])
    
  


  return (
    <div className="tailedBeastsPage">
        <div><Navbar/></div>
        
        <div className="tailedBeastsWrapper">
        {tailedBeasts.map(tailedBeastsItem=>(
                <div className="tailedBeastsItemBox" key={tailedBeastsItem.id}>

                    <div className="tailedBeastName">{tailedBeastsItem.name}</div>
                    
                    {(() => {
                            switch (tailedBeastsItem.id) {
                            case 711:
                                return <img src={image} alt="React Image" />;
                            
                            
                            
                            default:
                                
                                return <img src={tailedBeastsItem.images[0]} alt="React Image" />;
                            }
                        })()}
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default TailedBeasts