import classes from "./satyug.module.css"

import React, {useState} from "react"


const Satyug = () => {
    const v1 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665923848/1_jpxk5p.mp4";
    const v2 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665923964/2_purw66.mp4";
    const v3 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665923977/3_yhifq5.mp4";
    const v4 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665924099/4_w9mbna.mp4";
    const v5 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665924128/5_uk89rs.mp4";
    const v6 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665924190/6_p73bob.mp4";

    let alreadyScrolled = false

    const [vidIndex, setVidIndex] = useState(1)
    const [vidVar, setVidVar] = useState(v1) 


    const changeVid = () => {
        const toSetIndex = vidIndex < 6 ?  (vidIndex +1) : 6;
        toSetIndex ===1 ?setVidVar(v1): toSetIndex===2? setVidVar(v2): toSetIndex===3? setVidVar(v3):toSetIndex===4?setVidVar(v4): toSetIndex===5?setVidVar(v5): toSetIndex===6?setVidVar(v6):setVidVar(v6)
        setVidIndex(toSetIndex)
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

export default Satyug