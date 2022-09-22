import React, { useRef, useEffect, useState } from "react";
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact/Contact';
import Info from "./components/Info"
import Modal from "./components/Modal"
import Mask from "./pages/mask/mask";
function App() {
  
  const [Trigger,setTrigger]=useState(false);
  const handleModal= async ()=>{
        await setTrigger(!Trigger);
        if(Trigger){
          console.log(Trigger);
          return (<Modal/>)
        }

    }
  return (
    <div className="App">
      {/* <Home />
      <button onClick={()=>{handleModal()}}>Trigger</button>
      {Trigger?(<Modal/>):(<p></p>)} */}
      {/* <Contact/> */}
      <Mask/>
    </div>
  );
}

export default App;
