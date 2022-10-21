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
    "https://res.cloudinary.com/dde6glimb/video/upload/v1665915468/Main_Video_1_gfaand.mp4":"https://res.cloudinary.com/dde6glimb/video/upload/v1666363409/Untitled_im96cs.mp4";

  const navigate = useNavigate();

  return (
    <>
      <div className="text-center clickToEnter" id="clickText" >
        Click to Enter
        <img src={satyugLogo} alt='Satyug Logo'/>
      </div>
      <div className={classes.container}>
        <video
          src={v}
          className={classes.vidStyles}
          playsInline
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
