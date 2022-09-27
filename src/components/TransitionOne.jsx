import React, { useEffect, useRef } from "react";
import "../assets/css/TransitionOne.css";
import image from "../assets/images/image.png";
import hanuman from "../assets/images/hanuman.png";
// import audIntro from "../assets/audio/audIntro.mp3";
import homeVideo from "../assets/video/FInal_Render.mp4";
import silentVideo from "../assets/video/silent_video.mp4";
import homeAudio from "../assets/audio/FInal_Render.mp3";
import initialImage from "../assets/images/initial-image.png";
const TransitionOne = () => {
  let hoverCheck = 0;
  const ref = useRef(null);

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

  function playVideo(e){
    console.log(e.target);
    e.target.style.display = "none";
    const videoPlay = ref.current;
    videoPlay.play();



  }

  return (
    <div>

      {/* <div
        className="bgBack"
        onMouseEnter={() => {
          callHover();
        }}
      >
        <div className="hanumanLink">
          <img src={hanuman} className="hanumanAnimated" alt="water" />
        </div>
        <img src={image} className="image" alt="water" />
      
      </div> */}
      <img className="initialImage" src={initialImage} onClick={(e)=>{
        playVideo(e);
      }}/>
      <video  autoPlay className="homeVideo" id="myVideo"  ref={ref} >
        <source src={homeVideo} type="video/mp4"/>
      </video>

     {/* <iframe src={homeVideo} allow='autoPlay' className="homeVideo"></iframe> */}
 
    </div>
  );
};

export default TransitionOne;
