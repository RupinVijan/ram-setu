import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import "../assets/css/info.css"

const Info = () => {
//   const [open, setOpen] = useState(false);

//   const onOpenModal = () => setOpen(true);
//   const onCloseModal = () => setOpen(false);

  return (
    
    <div className = "modal-input d-flex justify-content-center align-items-center">
      {/* <button onClick={onOpenModal}>Open modal</button>
      <Modal open={open} onClose={onCloseModal} center classNames={{
          overlay: 'customOverlay',
          modal: 'customModal'
        }}>
        <h2>Simple centered modal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal> */}
      {/* <img  className="woodenBlock" src={require('./b.png')} alt="b"/> */}
      
      <input className="nameBox d-flex" placeholder="Type your name" type="text"/>
      <input className="numBox d-flex" placeholder="Type your phone number" type="tel" />
      </div>
    
  );
};
export default Info;