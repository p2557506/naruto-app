import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';

const TailedBeasts = () => {

    const [tailedBeasts,setTailedBeasts] = useState();

    const tB = "tailed-beasts";

    useEffect(() =>{
        const fetchAllTailedBeasts = async () =>{
        try {
            const response = await axios.get("https://dattebayo-api.onrender.com/tailed-beasts");
            setTailedBeasts(response.data)
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
        
        <ul className="tailedBeastList">
            <li></li>
        </ul>
    </div>
  )
}

export default TailedBeasts