import classes from "./Yog.module.css"


import React, {useState} from "react"


const Yog = () => {
    // const v1 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665924712/1_1_di76xj.mp4";
    // const v2 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665924729/2_1_ancwjy.mp4";
    // const v3 ="https://res.cloudinary.com/dde6glimb/video/upload/v1665924742/3_1_wpt0jo.mp4";
    const v = "https://res.cloudinary.com/dde6glimb/video/upload/v1665915568/Yoga_Video_1_o9ddgc.mp4"

    // let alreadyScrolled = false

    // const [vidIndex, setVidIndex] = useState(1);
    // const [vidVar, setVidVar] = useState(v1) ;


    // const changeVid = () => {
    //     const toSetIndex = vidIndex < 3 ?  (vidIndex +1) : 3;
    //     toSetIndex ===1 ?setVidVar(v1): toSetIndex===2? setVidVar(v2): toSetIndex===3? setVidVar(v3):setVidVar(v3);
    //     setVidIndex(toSetIndex);
    // }

    // window.onscroll = ()=>{
    //     if(!alreadyScrolled){
    //        alreadyScrolled = true
    //         setTimeout(()=>{
    //             alreadyScrolled = false
    //         },1500)
    //         changeVid()
    //     }
    // }

    return (
        <div className={classes.container} >
            <video src={v} className={classes.vidStyles} autoPlay muted/>
        </div>
    )
}

export default Yog