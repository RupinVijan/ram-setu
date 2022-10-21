import React from 'react'
import  './DhyanaToken.css';
import Bg from '../../../assets/images/DhyanaTokenBg.png';
import Modal from '../../../components/Modal';
const DhyanaToken = () => {
  
  return (
    <div className='DhyanTokenContainer'>
      <Modal/>
      <img className='DhyanaBg' src={Bg} alt="Bg" />
    </div>
  )
}

export default DhyanaToken