import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';

const Villages = () => {

    const [villages,setVillages] = useState();

    const tB = "tailed-beasts";

    useEffect(() =>{
        const fetchAllTailedBeasts = async () =>{
        try {
            const response = await axios.get("https://dattebayo-api.onrender.com/villages");
            setVillages(response.data.villages);
            console.log(response.data.villages);
        } catch (error) {
            console.error(error);
        }
        }
        fetchAllTailedBeasts();
    },[])

  return (
    <div className="villagePage">
        <div className="navbar"><Navbar/></div>
        {villages.map(village =>(

            <ul className='villagesPage'>
                <li>{village.name}</li>
            </ul>
            ))}
    </div>
  )
}

export default Villages