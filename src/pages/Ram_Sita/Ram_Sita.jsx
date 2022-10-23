import React from "react";
import "../../assets/css/Ram_Sita.css";


const Ram_Sita = () => {
  const video = "https://res.cloudinary.com/dde6glimb/video/upload/v1665922771/Final_Render_2_nseqqi.mp4";

  return (
    <div className="App">
    <video autoPlay muted loop id="myBGVideo">
      <source src="https://res.cloudinary.com/dde6glimb/video/upload/v1665922766/Waves_vsucxi.mp4" type=""></source>
    </video>
    <div className="topContainer" >
      <video
       autoPlay loop muted playsInline
        className="RamSitaGIFContainer"
        src={video}
        style={{zIndex:'1010',width:'100vw'  , objectFit:'fill'}}
      ></video>
      
    </div>
    </div>
  );
};

export default Ram_Sita;
