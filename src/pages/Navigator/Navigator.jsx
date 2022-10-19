import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Navigator.css"
const Navigator = () => {
    const navigate = useNavigate();
    return (
        <div className='navigatorImage'>
            <div className='navigateDarshana' onClick={()=>{navigate("/ram-setu");console.log("clicked");}}></div>
            <div className='navigateDhyana' onClick={()=>navigate("/dhyana")}></div>   
            <div className='navigateYog' onClick={()=>navigate("/yog")}></div>   
            <div className='navigateKriya' onClick={()=>navigate("/coming-soon")}></div>      
            
        </div>
    );
};

export default Navigator;
