import React, { useEffect } from "react";
import "../assets/css/TransitionOne.css";
import image from "../assets/images/image.png";
import hanuman from "../assets/images/hanuman.png";
// import audIntro from "../assets/audio/audIntro.mp3";
const TransitionOne = () => {
  let hoverCheck = 0;
  // const audio = new Audio(audIntro);
  // const start = () => {
  //   audio.play();
  // };

  useEffect(() => {
    // audio.play();
  }, []);

  function callHover() {
    if (hoverCheck === 0) {
      // audio.play();
      hoverCheck = 1;
    }
  }

  return (
    <div>

      <div
        className="bgBack"
        onMouseEnter={() => {
          callHover();
        }}
      >
        <div className="hanumanLink">
          <img src={hanuman} className="hanumanAnimated" alt="water" />
        </div>
        <img src={image} className="image" alt="water" />
      
      </div>
    </div>
  );
};

export default TransitionOne;
