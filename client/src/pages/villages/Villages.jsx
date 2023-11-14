import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { Link } from 'react-router-dom';
import "./villages.scss"

//Mapping Images
import narutoMap from "../../villagesMapping/narutoMap.png"
//Villages
import villageHiddenInRain from "../../villagesMapping/Amegakure_Symbol.png"
import villageHiddenAmongStars from "../../villagesMapping/Hoshigakure_Symbol.png"
import villageHiddenInRocks from "../../villagesMapping/Iwagakure_Symbol.png"
import villageHiddenInClouds from "../../villagesMapping/Kumogakure.webp"
//Include Map, War Lore, Politics, Kage

const Villages = () => {

    const [villages,setVillages] = useState([]);

    const tB = "tailed-beasts";

    useEffect(() =>{
        const fetchAllVillages = async () =>{
        try {
            const res = await axios.get("https://dattebayo-api.onrender.com/villages");
            setVillages(res.data.villages)
            console.log(res.data.villages);
        } catch (error) {
            console.error(error);
        }
        }
        fetchAllVillages();
    },[])

  return (
    <div className="villagePage">
        <div className="navbar"><Navbar/></div>
        <div className="header">
            <h1>Villages</h1>
        
        </div>
        
        <div className="villagesWrapper">

            {villages.map(village=>(
                <div className="villageItem" key={village.id}>
                   
                    <div className="villageName"><Link to={"/characters"}>{village.name}</Link></div> 
                    {(() => {
                            switch (village.id) {
                            case 0:
                            case 3:
                                return <img src="https://staticg.sportskeeda.com/editor/2022/09/ef758-16644630219394.png" alt="" />
                            
                            case 7:
                                return <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/33b02485-5ed0-48db-856d-e9f6ed48cc76/dafkcuy-46d8c94a-b970-4046-9838-3535b94e881d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMzYjAyNDg1LTVlZDAtNDhkYi04NTZkLWU5ZjZlZDQ4Y2M3NlwvZGFma2N1eS00NmQ4Yzk0YS1iOTcwLTQwNDYtOTgzOC0zNTM1Yjk0ZTg4MWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7ktFnAvcN3cRACcA933xiMorlRtNx1DumrhKgWLMJBE" />;
                            case 11:
                                return <img src="https://staticg.sportskeeda.com/editor/2022/06/2d32d-16552043881486.png" />;
                            case 12:
                                return <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddlq5je-4b35c71f-f0ff-49b6-bf0a-f301c190953f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGRscTVqZS00YjM1YzcxZi1mMGZmLTQ5YjYtYmYwYS1mMzAxYzE5MDk1M2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dw_-581pGZkY5HEJQtCP8K5BIlOOjwwwpTN2I1_yDbk" />;
                            case 13:
                                return <img src="https://staticg.sportskeeda.com/editor/2022/04/5d048-16497412051446-1920.jpg" /> ;
                            case 14:
                                return <img src="https://i.pinimg.com/originals/68/b6/a1/68b6a1f6e975586ebdf4a3586ba14336.png" />;
                            case 15:
                                return <img src={villageHiddenInRocks} />;
                            case 16:
                                return <img src="https://i.ytimg.com/vi/JHhnLfpjIwU/maxresdefault.jpg" /> ;
                            case 17:
                                return <img src="https://static.wikia.nocookie.net/naruto/images/5/5a/Kumogakure.png/revision/latest?cb=20160129210622" />;
                            case 18:
                                return <img src="https://staticg.sportskeeda.com/editor/2022/10/e730a-16648969725719.png" />;
                            
                            default:
                                
                                return null;
                            }
                        })()}
                       
                        

                    
                </div>
            ))}
        </div>
        <div className="worldMap">
            <img src={narutoMap} alt="" />
        </div>
    </div>
  )
}

export default Villages