import "./TestPage.css";
import { React, useState, useRef, useEffect } from "react";
// import { render } from 'react-dom'

const TestPage = () => {
  const [tempHeight, setTempHeight] = useState("0");
  const video = useRef(null);
  useEffect(() => {
      function scrollPlay() {
          var frameNumber = window.pageYOffset/playbackConstant;
          document.querySelector(".Oculus").currentTime = frameNumber;
          window.requestAnimationFrame(scrollPlay);
          // video.play();
      }
      window.requestAnimationFrame(scrollPlay);
  }, []);
  
  const v1 =
    "https://res.cloudinary.com/dde6glimb/video/upload/v1665943070/Yoga_Video_h2yvqr.mp4";
  var playbackConstant = 100;
  // var setHeight = document.querySelector("#Test");

  const metaDataCallback = () => {
    setTempHeight(Math.floor(video.current.duration) * playbackConstant);
    // setHeight.style.height = Math.floor(vid.duration) * playbackConstant + "px";
    console.log(tempHeight);
  };

  

  return (
    <div id="Test" style={{ height: `${tempHeight}px` }}>
      <video
        ref = {video}
        tabIndex="0"
        autobuffer="autobuffer"
        preload="preload"
        className="Oculus"
        onLoadedMetadata={ metaDataCallback}
        autoPlay
      >
        <source type="video/mp4" src={v1} />
      </video>
      {/* <video src={v1} tabIndex="0" autobuffer="autobuffer" preload="preload" onLoadedMetadata={ metaDataCallback } className="Oculus" muted autoPlay loop/> */}
      {/* <video
                // onLoadedMetaData={ metaDataCallback }
                // tabIndex="0"
                // autobuffer="autobuffer"
                // preload="preload"
                className="Oculus"

            >
                <source type="video/mp4" src="https://res.cloudinary.com/dde6glimb/video/upload/v1665916476/Dhyana_Video_1_gybggg.mp4"/>
            </video> */}
    </div>
  );
};
export default TestPage;
