import React, { useEffect,useState, useRef } from "react";
import "../assets/css/TransitionOne.css";
// import image from "../assets/images/image.png";
// import hanuman from "../assets/images/hanuman.png";
// import audIntro from "../assets/audio/audIntro.mp3";
import homeVideo from "../assets/video/FInal_Render.mp4";
import homeVideo2 from "../assets/video/renderAfterPlay.mp4";
import initialImage from "../assets/images/initial-image.png";
import Setu from "./Setu";
import { useNavigate } from "react-router-dom";
const TransitionOne = () => {
  const ref = useRef(null);
  const [vidIndex,setVidIndex]=useState(0)
  // const audio = new Audio(audIntro);
  // const start = () => {
  //   audio.play();
  // };
const navigate = useNavigate();
  useEffect(() => {
    // audio.play();
  }, []);
  useEffect(() => {
    if (vidIndex === 0 && ref.current) {
      ref.current.play();
    }
  }, [ref, vidIndex]);

  function playVideo(e){
    console.log(e.target);
    e.target.style.display = "none";
    const videoPlay = ref.current;
    videoPlay.play();
  }

  return (
    <div>
      <img className="initialImage" src={initialImage} alt="Front" onClick={(e)=>{
        playVideo(e);
      }}/>

      {/* <video  autoPlay className="homeVideo" id="myVideo"  ref={ref} onEnded={() => setVidIndex((idx) => idx + 1)}>
        <source src={homeVideo} type="video/mp4"/>
      </video>

       <video className="homeVideo2" id="myVideo"  ref={ref} >
        <source src={homeVideo2} type="video/mp4"/>
      </video>   */}

       <video
       className="homeVideo" id="myVideo"
       ref={ref}
        style={{ display: vidIndex === 1 ? "none" : "block" }}
        src={homeVideo}
        autoPlay
        onEnded={() => setVidIndex((idx) => idx + 1)}
      />
      
      {vidIndex===0?"":
        <video
        className="homeVideo" id="myVideo"
          src={homeVideo2}
          ref={ref}
          autoPlay
          onEnded={()=>{navigate("/setu")}}
        />
      }
 
    </div>
  );
};

export default TransitionOne;
