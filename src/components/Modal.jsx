import React, { useEffect, useState, useRef } from "react";
import "../assets/css/TestModal.css";
import PropTypes from "prop-types";
import { WalletContext } from "../context/WalletContext";
import uploadImg from "../assets/images/cloud-upload-regular-240.png";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { Loader } from "./Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Modal = ({ onRequestClose,pathName }) => {
  const [media, setMedia] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [preLoader, setPreLoader] = useState(false);
  const navigate = useNavigate();
  const { connectWallet, currentAccount, disconnectWallet } =
    React.useContext(WalletContext);
    let pageName = "";
    if(pathName === "/yogaToken") {
      pageName = "Yoga"
    } else if(pathName === "/dhyanaToken") {
      pageName = "Dhyana"
    }
    const pageText = "Thank You for submitting your video, you will soon be awarded with the " + pageName + " Token";
    const successMessage = () => toast.success(pageText);
  const handleChangeMedia = (e) => {
    // console.log(e.target.files[0].name)
    setMedia(e.target.files[0]);
    setLoaded(true);
    console.log(media);
  };

  const handleDisconnectWallet = () => {
    disconnectWallet();
    setWalletConnected(false);
  };

  const handleSubmitWallet = () => {
    connectWallet();
    console.log(currentAccount);
    currentAccount === ""
      ? setWalletConnected(false)
      : setWalletConnected(true);
  };

  const wrapperRef = useRef(null);
  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const handleSubmit = async () => {
    setPreLoader(true);
    console.log(media);
    const mediaName = uuidv4();
    var formData = new FormData();
    formData.append("public_id", `${mediaName}`);
    const url = "https://api.cloudinary.com/v1_1/dde6glimb/video/upload";
    let file = media;
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    let response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    let data;
    
    try {
      data = await response.json();
      successMessage();
      setTimeout(() => {
        navigate("/navigator");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
    console.log(data);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        walletId: currentAccount,
        videoLink: data.secure_url,
      }),
    };

    fetch("https://sheetdb.io/api/v1/mp8wxfuw1kf49", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
    // onRequestClose();
    
  };

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
              onClick={() => {
                window.location.href = "/navigator";
              }}
            >
              X
            </button>
          </div>
        </div>
        {!preLoader && (
          <div className="modal__buttonDetails">
            <div className="modal__videoUpload">
              {!loaded && (
                <div
                  ref={wrapperRef}
                  className="drop-file-input"
                  onDragEnter={onDragEnter}
                  onDragLeave={onDragLeave}
                  onDrop={onDrop}
                >
                  <div className="drop-file-input__label">
                    <img src={uploadImg} alt="Uploading IMG" />
                    <p>Drag & Drop your files here</p>
                  </div>
                  <input
                    type="file"
                    accept="video/mp4"
                    value=""
                    onChange={(e) => handleChangeMedia(e)}
                  />
                </div>
              )}
              {loaded && <div className="modal__uploadDone">{media?.name}</div>}
              <input
                className="modal__containerButton video-upload-wrap"
                type="file"
                id="input_151"
                multiple=""
                accept=".mp4, .mov"
                data-file-minsize="0"
                data-file-limit="0"
                data-component="fileupload"
                // onInput={readURL(this)}
                hidden=""
                onChange={(e) => handleChangeMedia(e)}
              />
            </div>
            
            {(walletConnected && media)  && (
              <div className="modal__submitButton">
                <button className="btn-hover color-5" onClick={handleSubmit}>
                  SUBMIT
                </button>
              </div>
            )}

            {(!walletConnected || !media) && (
              <div className="modal__submitButton">
                <button
                  className="btn-hover-disabled color-disabled"
                  onClick={handleSubmit}
                >
                  SUBMIT
                </button>
              </div>
            )}
            {!walletConnected && (
              <div className="modal__submitButton">
                <button
                  className="btn-hover color-5"
                  onClick={handleSubmitWallet}
                >
                  Connect To Wallet
                </button>
              </div>
            )}
            {walletConnected && (
              <div className="modal__submitButton">
                <button className=" color-disabled walletClass">
                  Wallet ID: {currentAccount}
                </button>
              </div>
            )}
            {walletConnected && (
              <div className="modal__submitButton">
                <button
                  className="btn-hover color-5"
                  onClick={handleDisconnectWallet}
                >
                  Disconnect Wallet
                </button>
              </div>
            )}
          </div>
        )}
        {preLoader && <Loader />}
      </div>
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
Modal.propTypes = {
  onFileChange: PropTypes.func,
};
export default Modal;
