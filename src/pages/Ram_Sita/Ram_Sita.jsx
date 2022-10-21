import React from "react";
import "../../assets/css/Ram_Sita.css";


const Ram_Sita = () => {
  const video = "https://res.cloudinary.com/dde6glimb/video/upload/v1665922771/Final_Render_2_nseqqi.mp4";

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
