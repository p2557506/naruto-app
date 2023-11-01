import React from 'react'
import Navbar from '../../navbar/Navbar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import "./kekkeiGenkai.scss"

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

  return (
    <div>
        <div><Navbar/></div>
        <h1>Kekkei Genkai</h1>
        <div className="kekkeiGenkaiWrapper">
        {kekkeiGenkai.map(kekkeiGenkaiItem=>(
                <div className="kekkeiGenkaiItemBox" key={kekkeiGenkaiItem.id}>
                   
                        <div className="kekkeiGenkaiName">{kekkeiGenkaiItem.name}</div>
                        

                    
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default KekkeiGenkai