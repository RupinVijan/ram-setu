import React, { useEffect, useState } from "react";
import "../../assets/css/Contact.css";
const Contact = () => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const save = () => {
    window.localStorage.setItem("name", name);
    window.localStorage.setItem("number", number);
    console.log("item saved", name, number);
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
        className="input-box"
        alt="LabelBox"
      />
      <label className="labelName d-flex"></label>

      <input
        type="text"
        className="nameinput"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="text"
        className="noinput"
        placeholder="Phone number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />

      <label className="labelNumber d-flex justify-content-center"></label>
      <button type="submit" className="button1" onClick={save}>
        OK
      </button>
    </div>
  );
};

export default Contact;
