import React, { useEffect, useState } from "react";
import "../assets/css/TestModal.css";
import { WalletContext } from "../context/WalletContext";

const Modal = ({ onRequestClose }) => {
  const [media, setMedia] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  const { connectWallet, currentAccount, disconnectWallet } = React.useContext(WalletContext);

  const handleChangeMedia = (e) => {
    // console.log(e.target.files[0].name)
    setMedia(e.target.files[0]);
    setLoaded(true);
    console.log(media);
  };

  const handleDisconnectWallet = () =>{
    disconnectWallet();
    setWalletConnected(false);
  }

  const handleSubmitWallet = () => {
    connectWallet();
    console.log(currentAccount);
    currentAccount === ""
      ? setWalletConnected(false)
      : setWalletConnected(true);
  };

  const handleSubmit = async () => {
    console.log(media);
    var formData = new FormData();
    formData.append("public_id", `${media.name}`);
    const url = "https://api.cloudinary.com/v1_1/dde6glimb/video/upload";
    let file = media;
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    let response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    let data = await response.json();
    console.log(data);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        walletId: currentAccount,
        videoLink: data.secure_url,
      }),
    };

    fetch(
      "https://docs.google.com/spreadsheets/d/15d6uBZRFD7MlXzca38huO5QdyMZfzPmgvAJCm9P_Ock/edit?usp=sharing",
      requestOptions
    )
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
        <div className="modal__videoUpload">
          {!loaded && (
            <label
              className="video-upload-wrap"
              id="video-upload-wrap"
              htmlFor="input_151"
            >
              <div className="drag-text">
                <div className="modal__upload">Upload Your Video</div>
                <div> .mp4 or .mov only | 50MB MAX </div>{" "}
              </div>
            </label>
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
        {walletConnected && (
          <div className="modal__submitButton">
            <button className="btn-hover color-5" onClick={handleSubmit}>
              SUBMIT
            </button>
          </div>
        )}

        {!walletConnected && (
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
            <button className="btn-hover color-5" onClick={handleSubmitWallet}>
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
            <button className="btn-hover color-5" onClick={handleDisconnectWallet}>
              Disconnect Wallet
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
