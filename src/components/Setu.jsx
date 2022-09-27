import React, { useEffect, useState, useRef } from "react";
import Draggable from "react-draggable";
import "../assets/css/Setu.css";
import india_Top from "../assets/images/india-top-view.png";
import Bridge from "../assets/images/setu-top-view.png";
import Island from "../assets/images/lanka-top-view.png";
import water from "../assets/images/water-top-view.png";
import chat from "../assets/images/callout1.png";
import chat2 from "../assets/images/callout2.png";
import stone from "../assets/images/stone.png";
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
      // console.log(
      //   "GOOOOOOOOOAAAAAAAAAALLLLLLLLLLLLLL ⚽⚽⚽⚽⚽⚽⚽⚽⚽⚽⚽⚽"
      // );
    }
  };
  useEffect(() => {
    // console.log("Goal " + Goalposition.x + " " + Goalposition.y);
    // console.log("Stone " + Stoneposition.x + " " + Stoneposition.y);
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
      <img src={india_Top} alt="india-top" className="india-top" />
      <img src={water} alt="water-top" className="water-top" />
      <img src={Bridge} alt="setu-top" className="setu-top" />
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
      <img src={Island} alt="sri-lanka-top" className="sri-lanka-top" />
    </div>
  );
};

export default Setu;
