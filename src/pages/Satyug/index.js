import classes from "./satyug.module.css"
import v1 from "../../assets/video/satyug/1.mp4"
import v2 from "../../assets/video/satyug/2.mp4"
import v3 from "../../assets/video/satyug/3.mp4"
import v4 from "../../assets/video/satyug/4.mp4"
import v5 from "../../assets/video/satyug/5.mp4"
import v6 from "../../assets/video/satyug/6.mp4"
import React, {useState} from "react"


const Satyug = () => {

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