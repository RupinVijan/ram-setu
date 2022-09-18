import React from "react";
import "../assets/css/modelseet.css";
// import {block} from "../assets/images/woodenBlock.png"
function Modal({ setOpenModal }) {
  return (
    <div className="d-flex align-items-center flex-wrap">

    <div className="container d-flex justify-content-center align-items-center">
      <div className="modalContainer d-flex ">
        <img  className="woodenBlock d-flex" src={require('./b.png')} alt="b"/>
        <div className="titleCloseBtn">
        
        </div>
      </div>
      </div>

    </div>
  );
}

export default Modal;