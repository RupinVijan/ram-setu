import classes from "./satyug.module.css";
import { useNavigate } from "react-router-dom";
import satyugLogo from '../../assets/images/satyugLogo.png'

import React from "react";

const Dhyana = () => {
  const v =
    "https://res.cloudinary.com/dde6glimb/video/upload/v1665915468/Main_Video_1_gfaand.mp4";

  const navigate = useNavigate();

  return (
    <>
      <div className="text-center clickToEnter" id="clickText" style={{position:'absolute',top:'40vh'}}>
        Click to Enter
        <img src={satyugLogo} alt='Satyug Logo'/>
      </div>
      <div className={classes.container}>
        <video
          src={v}
          className={classes.vidStyles}
          onClick={(e) => {
            e.target.play();
            document.getElementById('clickText').style.display="none";
          }}
          onEnded={() => navigate("/navigator")}
        />
      </div>
    </>
  );
};

export default Dhyana;
