import React, { useEffect, useState, useRef } from "react";
import "../../assets/css/Contact.css";
import ramSita from "../../assets/video/Final_Render_2.mp4";
const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [vidOn, setVidOn] = useState(false);
  const [hideModal,setHideModal]=useState(false)
  const ref = useRef(null);
  const shareData = {
    title: "Ram Setu",
    text: "Lose will to live!",
    url: "https://satyug-101.netlify.app/",
  };
  
  const save = () => {
    window.localStorage.setItem("name", name);
    window.localStorage.setItem("number", number);
    console.log("item saved", name, number);

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

  function playVideo(e) {
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
      <button
        type="submit"
        className={"closeIcon"}
        onClick={() => {
          
          setVidOn(true);
          
        }}
      >
        X
      </button>
      
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
      
      <button
        type="submit"
        className={"button1"}
        onClick={() => {
          save();
          setVidOn(true);
          playVideo();
        }}
      >
        Submit
      </button>

      
      {vidOn === true ? (
        <div className="warp d-flex justify-content-center align-items-center">
        <video
        playsInline
          className="ramSita d-flex"
          id="myVideo"
          ref={ref}
          src={ramSita}
          autoPlay
          loop
        ></video>
        <button
        type="share"
        className={"shareButton"}
        onClick={() => navigator.share(shareData)}
        
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          className={"bi bi-share-fill"}
          viewBox="0 0 16 16"
        >
          <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
        </svg><span className="px-3">SHARE NOW</span>
      </button>
       </div>
        
      ) : (
        <></>
      )}
      
      <img
        src={require("../../assets/images/hanuman.png")}
        className="hanuman d-flex align-items-center"
        alt="Hanuman img"
      />
    </div>
  );
};

export default Contact;
