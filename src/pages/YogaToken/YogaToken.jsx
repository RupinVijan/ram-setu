import React from 'react'
import "./YogaToken.css";
import yogaImg from "../../assets/images/yogaToken.png";
import Modal from '../../components/Modal';
import { useLocation } from 'react-router-dom';
const YogaToken = () => {
  const location = useLocation();
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}
let screenWidth = getWindowDimensions().width;

  return (
    <div>
        <Modal pathName={location.pathname} />
        <img src={yogaImg} className="yogaTokenImg" alt="yog" />
    </div>
  )
}

export default YogaToken;