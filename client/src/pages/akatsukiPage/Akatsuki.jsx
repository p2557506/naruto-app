import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import Navbar from '../../navbar/Navbar';

const Akatsuki = () => {


    const [akatsuki,setAkatsuki] = useState([]);

    useEffect(() =>{
        const fetchAllAkatsuki = async () =>{
        try {
            const res = await axios.get("https://dattebayo-api.onrender.com/akatsuki");
            setAkatsuki(res.data.akatsuki)
            console.log(res.data.akatsuki);
        } catch (error) {
            console.error(error);
        }
        }
        fetchAllAkatsuki();
    },[])

  return (
    <div className="akatsukiPage">
        <div><Navbar/></div>

        {akatsuki.map(akatsukiItem=>(
            <div className="akatsukiList">
                <li>{akatsukiItem.name}</li>
            </div>
        ))}
        
    </div>
  )
}

export default Akatsuki