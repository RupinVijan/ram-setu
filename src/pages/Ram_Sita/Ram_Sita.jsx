import React from "react";
import "../../assets/css/Ram_Sita.css";
import video from "../../assets/video/Final_Render_2.mp4";

const Ram_Sita = () => {
  const shareData = {
    title: 'Ram Setu',
    text: 'Lose will to live!',
    url: 'https://satyug-101.netlify.app/'
  }
  return (
    <div className="topContainer">
      <video
       autoPlay loop muted playsInline
        className="RamSitaGIFContainer"
        src={video}
      ></video>
      
    </div>
  );
};

export default Ram_Sita;
