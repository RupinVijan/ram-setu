import React, { useEffect, useState, useRef } from "react";
import Draggable from "react-draggable";
import "../assets/css/Setu.css";
import chat from "../assets/images/callout1.png";
import chat2 from "../assets/images/callout2.png";
import stone from "../assets/images/stone.png";
import background_video from "../assets/video/setuvid.mp4";
import after_video from "../assets/video/afterSetu.mp4";
import after_audio from "../assets/audio/afterSetuAudio.mp3";
import { useNavigate } from "react-router-dom";

const Setu = () => {
  const [Goalposition, setGoalPosition] = useState({ x: 0, y: 0 });
  const [Stoneposition, setStonePosition] = useState({ x: 0, y: 0 });
  const [Complete, SetComplete] = useState(false);
  const Goal = useRef();
  const stony = useRef();
  const trackPos = () => {
    const GoalX = Goal.current.getBoundingClientRect().left;
    const GoalY = Goal.current.getBoundingClientRect().top;
    const StoneX = stony.current.getBoundingClientRect().left;
    const StoneY = stony.current.getBoundingClientRect().top;
    setGoalPosition({ x: Math.round(GoalX), y: Math.round(GoalY) });
    setStonePosition({ x: Math.round(StoneX), y: Math.round(StoneY) });
  };
  const CheckCollide = (GoalX, GoalY, StoneX, StoneY) => {
    if (
      (StoneX >= GoalX - 20 || StoneX <= GoalX + 20) &&
      // StoneY === GoalY &&
      !(StoneY <= GoalY - 20 || StoneY >= GoalY + 20) && 
      StoneX !== 0
    ) {
      SetComplete(true);
    }
  };
  const navigate = useNavigate();
  
  useEffect(() => {
    if (Complete === false) {
      CheckCollide(
        Goalposition.x,
        Goalposition.y,
        Stoneposition.x,
        Stoneposition.y
      );
    }
  }, [Goalposition, Stoneposition, Complete]);

  const [isDragging, setDragging] = useState(false);
  return (
    <div className="imgContainer">
      <video
        autoPlay
        loop
        muted
        className="BackgroundVideoContainer"
        src={Complete === false ? background_video : after_video}
      ></video>
      {Complete === true ? (
        <audio 
        autoPlay
        className="audio-element"
        src={after_audio}
        onEnded={()=>{navigate("/contact");
        console.log("audio ended next paage rendered");  
        }}
           
           >
          
          
        </audio>
      ) : null}
      {Complete === false ? (
        <Draggable
          onDrag={() => {
            if (Complete === false) {
              trackPos();
            }
            setDragging(true);
          }}
          onStop={() => {
            setDragging(false);
          }}
        >
          <img ref={stony} src={stone} alt="stone" className={"stone" + (isDragging ? " " : " highlight")} />
        </Draggable>
      ) : null}
      {Complete === false ? (
        <div className="Goal" ref={Goal}></div>
      ) : (
        <img src={stone} alt="fixed-stone" className="stone-fixed" />
      )}
      <div className="chatContainer">
        {Complete === false ? (
          <img src={chat} alt="chat" className="chat" />
        ) : (
          <img src={chat2} alt="chat" className="chat" />
        )}
      </div>
    </div>
  );
};

export default Setu;
