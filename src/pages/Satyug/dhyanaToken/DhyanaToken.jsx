import React from 'react'
import  './DhyanaToken.css';
import Bg from '../../../assets/images/DhyanaTokenBg.png';
import Modal from '../../../components/Modal';
import { useLocation } from 'react-router-dom';
const DhyanaToken = () => {
  const location = useLocation();


  return (
    <div className='DhyanTokenContainer'>
      <Modal pathName={location.pathname}/>
      <img className='DhyanaBg' src={Bg} alt="Bg" />
    </div>
  )
}

export default DhyanaToken