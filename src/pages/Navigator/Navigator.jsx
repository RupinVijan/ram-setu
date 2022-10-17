import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Navigator.css"
const Navigator = () => {
    const navigate = useNavigate();
    return (
        <div className='navigatorImage'>
            <div className='navigateDarshana' onClick={()=>{navigate("/darshana");console.log("clicked");}}></div>
            <div className='navigateDhyana' onClick={()=>navigate("/dhyana")}></div>   
            <div className='navigateYog' onClick={()=>navigate("/Yog")}></div>   
            <div className='navigateKriya' onClick={()=>navigate("/testPage")}></div>      
            
        </div>
    );
};

export default Navigator;