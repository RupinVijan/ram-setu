import classes from "./dhyana.module.css"
import React from "react"
import { useNavigate } from "react-router-dom";

const Dhyana = () => {
    const navigate = useNavigate();
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
    }
    let screenWidth = getWindowDimensions().width;

    const v = screenWidth>600?"https://res.cloudinary.com/dde6glimb/video/upload/v1665916476/Dhyana_Video_1_gybggg.mp4":"https://res.cloudinary.com/dde6glimb/video/upload/v1666419487/M-2_-_Compressed_with_FlexClip_ud6vfg.mp4";

   

    return (
        <div className="App">
            <div className={classes.container} >
                <video src={v} playsInline className={classes.vidStyles} onEnded={()=>navigate("/DhyanaToken")} autoPlay/>
            </div>
            <button className="SkipButtonUniversal" onClick={()=>navigate("/DhyanaToken")}>
                <div className="SkipButtonUniversalContainer">
                Skip
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-forward" viewBox="0 0 16 16">
                    <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.752l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696L7.5 7.248v-2.94c0-.653.713-.998 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5zM1 4.633v6.734L6.804 8 1 4.633zm7.5 0v6.734L14.304 8 8.5 4.633z"/>
                </svg>
                </div>
            </button>
        </div>
    )
}

export default Dhyana
