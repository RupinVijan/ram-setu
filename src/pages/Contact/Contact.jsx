import React, { useEffect, useState, useRef } from "react";
import "../../assets/css/Contact.css";
import Mask from "../Mask/Mask";
import { useNavigate } from "react-router-dom";
import ramSita from "../../assets/video/Final_Render_2.mp4";

const Contact = () => {
  const [name, setName] = useState(' ');
  const [number, setNumber] = useState(' ');
  const[trigger,setTrigger]=useState(false);
  const[vidOn,setVidOn]=useState(false);
  const ref = useRef(null);
  const save = () => {
    window.localStorage.setItem("name", name);
    window.localStorage.setItem("number", number);
    console.log("item saved", name, number);
    setTrigger(true);

    // let blockDiv = document.querySelector('.targetAnimation'); 
    // blockDiv.classList.add('animationClass');
    // let nameinput = document.querySelector('.nameinput'); 
    // nameinput.classList.add('animationClass');
    // let noinput = document.querySelector('.noinput'); 
    // noinput.classList.add('animationClass');
    // let buton = document.querySelector('.button1'); 
    // buton.classList.add('animationClass');


  };
  useEffect(() => {
    if (ref.current) {
      ref.current.play();
    }
  }, [ref]);

  useEffect(() => {
    const data1 = window.localStorage.getItem("name");
    const data2 = window.localStorage.getItem("number");

    setName(data1);
    setNumber(data2);
  }, []);
  const navigate = useNavigate();

  function playVideo(e){
 
   const videoPlay = ref.current;
   videoPlay.play();
  }
  // useEffect( () =>{

  //     window.localStorage.setItem("name",name);
  //     window.localStorage.setItem("number",number);
  //     console.log(name,number);
  // } ,[name,number])

  return (
    <div className="background d-flex justify-content-center">
      <img
        src={require("../../assets/images/LableBox.png")}
        className="input-box targetAnimation"
        alt="LabelBox"
      />
      <label className="labelName d-flex targetAnimation"></label>

      <input
        type="text"
        className="nameinput "
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="text"
        className="noinput "
        placeholder="Phone number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />

      <label className="labelNumber d-flex justify-content-center "></label>
      {/* <button type="submit" className="button1" onClick={save}>
        OK
      </button> */}
      <button type="submit" className={"button1 "+(vidOn===true?"ramSita":"")} onClick={()=>{save();setVidOn(true);playVideo();}}>Show</button>
      {vidOn===true?
       (
        <video
       className="ramSita" id="myVideo"
       ref={ref}
       src={ramSita}
       autoPlay
       loop
      />)
      
      :(<></>)
}
      {/* {trigger?(<Mask/>):(<button type="submit" className="button1" onClick={save}>Show Mask</button>)} */}
      <img
        src={require("../../assets/images/hanuman.png")}
        className="hanuman d-flex align-items-center"
        alt="Hanuman img"
      />
    </div>
  );
};

export default Contact;
