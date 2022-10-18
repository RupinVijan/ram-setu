import classes from "./dhyana.module.css"
import React from "react"
import { useNavigate } from "react-router-dom";

const Dhyana = () => {
    const navigate = useNavigate();
    // const v1 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665925153/1_2_sjoqmd.mp4"
    // const v2 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665925164/2_2_aa7pb2.mp4"
    // const v3 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665925178/3_2_vcxmyc.mp4"
    // const v4 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665925192/4_1_oq0wwy.mp4"
    // const v5 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665925416/5_1_k7ljnn.mp4"
    // const v6 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665925428/6_1_e7inia.mp4"
    // const v7 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665925441/7_vagw0l.mp4"
    // const v8 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665925457/8_l6awql.mp4"

    const v = "https://res.cloudinary.com/dde6glimb/video/upload/v1665916476/Dhyana_Video_1_gybggg.mp4";

    // let alreadyScrolled = false

    // const [vidIndex, setVidIndex] = useState(1);
    // const [vidVar, setVidVar] = useState(v1) ;


    // const changeVid = () => {
    //     const toSetIndex = vidIndex < 8 ?  (vidIndex +1) : 8;
    //     toSetIndex ===1? setVidVar(v1): toSetIndex===2? setVidVar(v2): toSetIndex===3? setVidVar(v3): toSetIndex===4? setVidVar(v4): toSetIndex===5? setVidVar(v5): toSetIndex===6? setVidVar(v6): toSetIndex===7? setVidVar(v7): toSetIndex===8? setVidVar(v8): setVidVar(v8);
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
        // <div className={classes.container} >
        //     <video src={vidVar} className={classes.vidStyles} autoPlay loop/>
        // </div>
        <div className={classes.container} >
            <video src={v} className={classes.vidStyles} onEnded={()=>navigate("/DhyanaToken")} autoPlay/>
        </div>
    )
}

export default Dhyana
