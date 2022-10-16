import React, { useState } from "react";
import Modal from "../../components/Modal";
import "../../assets/css/TestModal.css";

const TestModal = () => {
  const [isModalOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  return (
    <main>
      {isModalOpen && <Modal onRequestClose={toggleModal} />}

      <button className="modalButton" onClick={toggleModal} type="button">
        Show the modal
      </button>
    </main>
  );
};

export default TestModal;
