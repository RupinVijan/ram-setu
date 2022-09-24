import React, { useEffect, useState } from "react";
import "../../assets/css/Contact.css";
import Mask from "../Mask/Mask";
const Contact = () => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const[trigger,setTrigger]=useState(false);

  const save = () => {
    window.localStorage.setItem("name", name);
    window.localStorage.setItem("number", number);
    console.log("item saved", name, number);
    setTrigger(true);

    let blockDiv = document.querySelector('.targetAnimation'); 
    blockDiv.className.add('animationClass');


  };
  useEffect(() => {
    const data1 = window.localStorage.getItem("name");
    const data2 = window.localStorage.getItem("number");

    setName(data1);
    setNumber(data2);
  }, []);
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
        className="nameinput targetAnimation"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="text"
        className="noinput targetAnimation"
        placeholder="Phone number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />

      <label className="labelNumber d-flex justify-content-center targetAnimation"></label>
      {/* <button type="submit" className="button1" onClick={save}>
        OK
      </button> */}
      {trigger?(<Mask/>):(<button type="submit" className="button1" onClick={save}>Show Mask</button>)}
    </div>
  );
};

export default Contact;
