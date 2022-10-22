import classes from "./satyug.module.css";
import { useNavigate } from "react-router-dom";
import satyugLogo from '../../assets/images/satyugLogo.png'

import React from "react";

const Dhyana = () => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}
let screenWidth = getWindowDimensions().width;
  const v =
    screenWidth>600?
    "https://res.cloudinary.com/dde6glimb/video/upload/v1665915468/Main_Video_1_gfaand.mp4":"https://res.cloudinary.com/dde6glimb/video/upload/v1666419775/M-1_-_Compressed_with_FlexClip_dpfv1b.mp4";

  const navigate = useNavigate();

  return (
    <>
      <div className="text-center clickToEnter" id="clickText" >
        Click to Enter  &nbsp;    <div onClick={()=>{
          window.location.href = '/about'
       }}> About Us</div>
        <img src={satyugLogo} alt='Satyug Logo'/> 
      
      </div>
      <div className={classes.container}>
        <video
          src={v}
          className={classes.vidStyles}
          playsInline
          onClick={(e) => {
            // e.target.play();
            document.getElementById('clickText').style.display="none";
          }}
          onEnded={() => navigate("/navigator")}
        />
      </div>
    </>
  );
};

export default Dhyana;
