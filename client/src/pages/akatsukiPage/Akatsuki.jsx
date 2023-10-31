import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import "./akatsuki.scss";

const Akatsuki = () => {


    const [akatsuki,setAkatsuki] = useState([]);

    useEffect(() =>{
        const fetchAllAkatsuki = async () =>{
        try {
            const res = await axios.get("https://dattebayo-api.onrender.com/akatsuki");
            setAkatsuki(res.data.akatsuki);
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
        <h1>Akatsuki Members</h1>
        <div className="akatsukiWrapper">

            {akatsuki.map(akatsukiItem=>(
                <div className="akatsukiItemBox" key={akatsukiItem.id}>
                   
                        <Link Link to={`/character/${akatsukiItem.id}`}><div className="akatsukiName">{akatsukiItem.name}</div></Link> 
                        <div className="akatsukiImage"><img src={akatsukiItem.images} alt="React Image" /></div>

                    
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Akatsuki