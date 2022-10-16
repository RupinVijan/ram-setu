// import classes from "./satyug.module.css"

// import React, {useState, useEffect, useRef} from "react"
// import { debounce } from "lodash";

// const Satyug = () => {
//     const video = useRef(null);

//     const [tempHeight, setTempHeight] = useState("0");
//     useEffect(() => {
//         function scrollPlay() {
//             var frameNumber = window.pageYOffset/playbackConstant;
//             document.querySelector(".Oculus").currentTime = frameNumber;
//             window.requestAnimationFrame(scrollPlay);
//             video.play();
//         }
//         window.requestAnimationFrame(scrollPlay);
//     }, []);

//     const v1 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665915468/Main_Video_1_gfaand.mp4";

//     var playbackConstant = 100;

//     const metaDataCallback = () => {
//         setTempHeight(Math.floor(video.current.duration) * playbackConstant);
//         console.log(tempHeight);
//     };

//     // const v2 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665923964/2_purw66.mp4";
//     // const v3 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665923977/3_yhifq5.mp4";
//     // const v4 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665924099/4_w9mbna.mp4";
//     // const v5 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665924128/5_uk89rs.mp4";
//     // const v6 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665924190/6_p73bob.mp4";


//     // const [vidIndex, setVidIndex] = useState(1)
//     // const [vidVar, setVidVar] = useState(v1) 

//     // const changeVid = () => {
//     //     const toSetIndex = vidIndex < 6 ?  (vidIndex +1) : 6;
//     //     toSetIndex ===1 ?setVidVar(v1): toSetIndex===2? setVidVar(v2): toSetIndex===3? setVidVar(v3):toSetIndex===4?setVidVar(v4): toSetIndex===5?setVidVar(v5): toSetIndex===6?setVidVar(v6):setVidVar(v6)
//     //     setVidIndex(toSetIndex)
//     // }

//     // window.onscroll = ()=>{
//     //     if(!alreadyScrolled){
//     //        alreadyScrolled = true
//     //         setTimeout(()=>{
//     //             alreadyScrolled = false
//     //         },1500)
//     //         changeVid()
//     //     }
//     // }

//     return (
//         <div id="Test" style={{ height: `${tempHeight}px` }}>
//             <video 
//                 ref = {video}
//                 tabIndex="0"
//                 autobuffer="autobuffer"
//                 preload="preload"
//                 className="Oculus"
//                 onLoadedMetadata={ metaDataCallback}
//                 autoPlay
//             >
//                 <source type="video/mp4" src={v1} />
//             </video>
//         </div>
//     )
// }

// export default Satyug

import classes from "./satyug.module.css"


import React, {useState} from "react"


const Dhyana = () => {
    const v1 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665925153/1_2_sjoqmd.mp4"
    const v2 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665925164/2_2_aa7pb2.mp4"
    const v3 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665925178/3_2_vcxmyc.mp4"
    const v4 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665925192/4_1_oq0wwy.mp4"
    const v5 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665925416/5_1_k7ljnn.mp4"
    const v6 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665925428/6_1_e7inia.mp4"
    const v7 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665925441/7_vagw0l.mp4"
    const v8 = "https://res.cloudinary.com/dde6glimb/video/upload/v1665925457/8_l6awql.mp4"

    const v = "https://res.cloudinary.com/dde6glimb/video/upload/v1665915468/Main_Video_1_gfaand.mp4"

    let alreadyScrolled = false

    const [vidIndex, setVidIndex] = useState(1);
    const [vidVar, setVidVar] = useState(v1) ;


    const changeVid = () => {
        const toSetIndex = vidIndex < 8 ?  (vidIndex +1) : 8;
        toSetIndex ===1? setVidVar(v1): toSetIndex===2? setVidVar(v2): toSetIndex===3? setVidVar(v3): toSetIndex===4? setVidVar(v4): toSetIndex===5? setVidVar(v5): toSetIndex===6? setVidVar(v6): toSetIndex===7? setVidVar(v7): toSetIndex===8? setVidVar(v8): setVidVar(v8);
        setVidIndex(toSetIndex);
    }

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
            <video src={v} className={classes.vidStyles} autoPlay muted loop/>
        </div>
    )
}

export default Dhyana