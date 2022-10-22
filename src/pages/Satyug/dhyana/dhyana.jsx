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
        
        <div className={classes.container} >
            <video src={v} playsInline className={classes.vidStyles} onEnded={()=>navigate("/DhyanaToken")} autoPlay/>
        </div>
    )
}

export default Dhyana
