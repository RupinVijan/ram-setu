import classes from "./Yog.module.css"
import v1 from "../../assets/video/satyug/T1.mp4"
import v2 from "../../assets/video/satyug/T2.mp4"
import v3 from "../../assets/video/satyug/T3.mp4"

import React, {useState} from "react"


const Yog = () => {

    let alreadyScrolled = false

    const [vidIndex, setVidIndex] = useState(1);
    const [vidVar, setVidVar] = useState(v1) ;


    const changeVid = () => {
        const toSetIndex = vidIndex < 3 ?  (vidIndex +1) : 3;
        toSetIndex ===1 ?setVidVar(v1): toSetIndex===2? setVidVar(v2): toSetIndex===3? setVidVar(v3):setVidVar(v3);
        setVidIndex(toSetIndex);
    }

    window.onscroll = ()=>{
        if(!alreadyScrolled){
           alreadyScrolled = true
            setTimeout(()=>{
                alreadyScrolled = false
            },1500)
            changeVid()
        }
    }

    return (
        <div className={classes.container} >
            <video src={vidVar} className={classes.vidStyles} autoPlay loop/>
        </div>
    )
}

export default Yog