import React, { useEffect, useState, useRef } from "react";
import Draggable from "react-draggable";
import "../assets/css/Setu.css";
import chat from "../assets/images/callout1.png";
import chat2 from "../assets/images/callout2.png";
import stone from "../assets/images/stone.png";
import background_video from "../assets/video/setuvid.mp4";
import after_video from "../assets/video/afterSetu.mp4";
import after_audio from "../assets/audio/afterSetuAudio.mp3";

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
      (StoneX >= GoalX - 10 || StoneX <= GoalX + 10) &&
      StoneY === GoalY &&
      StoneX !== 0
    ) {
      SetComplete(true);
    }
  };
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
        <audio autoPlay className="audio-element">
          <source src={after_audio}></source>
        </audio>
      ) : null}
      {Complete === false ? (
        <Draggable
          onDrag={() => {
            if (Complete === false) {
              trackPos();
            }
          }}
        >
          <img ref={stony} src={stone} alt="stone" className="stone" />
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
