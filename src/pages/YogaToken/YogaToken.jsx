import React from 'react'
import "./YogaToken.css";
import yogaImg from "../../assets/images/yogaToken.png";
import Modal from '../../components/Modal';
const YogaToken = () => {
  return (
    <div>
        <Modal />
        <img src={yogaImg} className="yogaTokenImg" alt="yog" />
    </div>
  )
}

export default YogaToken;