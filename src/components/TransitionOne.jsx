import React from 'react'
import "../assets/css/TransitionOne.css";
import bgFront from "../assets/images/mainBackground.png";
import water from "../assets/images/water.png";
import setuLand from "../assets/images/islandAndSetu.png";
import treeOne from "../assets/images/palm tree.png";
import treeTwo from "../assets/images/RamSetuTJustop.png";
import gameBoard from "../assets/images/game name board.png";
import image from "../assets/images/image.png";
import hanuman from "../assets/images/hanuman.png";

const TransitionOne = () => {
  return (
    <div >

{/*     
        <div>
          <img src={treeTwo} className="header_img"/>
         </div>

        <div>
          <img src={bgFront} className="bgFront" alt="bg"/>
        </div>
        <div>
          <img src={setuLand} className="setuLandFront" alt="bg"/> 
        </div>
        <div>
        <img src={water} className="water" alt="water" />
        </div>         */}

        
        <div className='bgBack'>
          <img src={image} className="image" alt="water" />
          <img src={hanuman} className="hanuman" alt="water" />
        </div>
    </div>
  )
}

export default TransitionOne;

        // <div style={{display:"flex"}}>
        //   <img src={treeOne}  className="treeLeft"/>
        //    <img src={gameBoard} className="gameBoard"/>
        //   <img src={treeTwo} className="treeRight"/>
        // </div>
