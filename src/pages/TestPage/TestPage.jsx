import "./TestPage.css"
import {React, useState, useEffect, useRef} from "react"

const TestPage = () => {
    let v0=useRef();
    let setHeight=useRef();
    let  frameNumber=0;
    const playbackConst = 500;
    
    const handleScroll= ()=>{
        
        frameNumber = window.pageYOffset/playbackConst;
        v0.currentTime = frameNumber;
        window.requestAnimationFrame(handleScroll);
    }
    
    useEffect(() => {
        v0.addEventListener('loadedmetadata', function() {
            setHeight.style.height = Math.floor(v0.duration) * playbackConst + "px";
        });
      }, []);
   
    
    window.requestAnimationFrame(handleScroll);
   

    return(
        <div>
            <div id="set-height" ref={setHeight}></div>
                <p className="vidTime" id="time"></p>
                <video id="v0" ref={v0} onScroll={handleScroll}  tabIndex="0" autobuffer="autobuffer" preload="preload">
                <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"></source>
                </video>
        </div>
    );
}
export default TestPage