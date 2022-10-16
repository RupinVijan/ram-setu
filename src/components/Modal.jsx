import React, { useEffect } from "react";
import "../assets/css/TestModal.css";

const Modal = ({ onRequestClose }) => {
  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        onRequestClose();
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <div className="modal__backdrop">
      <div className="modal__container">
        <div className="modal__containerHeader">
          <h1>Video Upload</h1>
          <div className="modal__clossButton">
            <button
              className="modalButton"
              type="button"
              onClick={onRequestClose}
            >
              X
            </button>
          </div>
        </div>
        <div className="modal__videoUpload">
          <label
            className="video-upload-wrap"
            id="video-upload-wrap"
            for="input_151"
          >
            <div className="drag-text">
              <text3>Upload Your Video</text3>
              <text4> .mp4 or .mov only | 500MB MAX </text4>{" "}
            </div>
          </label>

          <input
            className="modal__containerButton"
            type="file"
            id="input_151"
            multiple=""
            accept=".mp4, .mov"
            data-file-minsize="0"
            data-file-limit="0"
            data-component="fileupload"
            oninput="readURL(this)"
            hidden=""
          />
        </div>
        <div className="modal__submitButton">
          <button class="btn-hover color-5">SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
