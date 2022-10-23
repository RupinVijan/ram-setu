import React , {useEffect, useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typical from 'react-typical';
import Footer from "../components/Footer";
import UpperFooter from "../components/UpperFooter";
import cs from "./Home.module.css"

function Home() {
  const v1 = "https://res.cloudinary.com/dde6glimb/video/upload/v1666530742/earth_lymmu1.mp4";
  const[hideContent,setHideContent]=useState(true)
  useEffect(() => {
    AOS.init()
    window.scrollTo(0,0);
    setTimeout(() => {
      setHideContent(false)
    }, 6000);
    
  }, []);
  
  return (
    <>
    <div className="homeIndex ">

    <video  src={v1} autoPlay onClick={e=>{e.stopPropagation()}} playsInline loop  className={cs.video}/>
      <div className="HomeDiv container" style={{zIndex:'1000'}}>
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
          <div className="col-lg-12 p-3 p-lg-5 pt-lg-3">
            <h2 className="display-4 fw-bold lh-1 font-scriptina"> 
            <Typical
        steps={['Sat in Sanskrit stands for "Right and Truthful" and Yug stands for "Period of Time"', 2000]}
        // loop={Infinity}
        wrapper="h2"
      />  
            </h2>
      </div>
        </div>
      </div>
      
       {hideContent===true?<></>:<div >
              <div className="HomeDiv container"  data-aos="fade-up-right"  data-aos-easing="ease-in-back" data-aos-delay="1500">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
          <div className="col-lg-12 p-3 p-lg-5 pt-lg-3">
            <h2 className="display-4 fw-bold lh-1 text-light font-shalimar click-pointer" onClick={()=>{
              window.location.href = '/ram-setu';
              console.log(1)
            }}> 
            <span style={{color:'gold'}} onClick={()=>{console.log(1)}} >
            Ram Setu   &nbsp;
            </span>
             - Invoke human consciousness through the power of memes

            </h2>
      </div>
        </div>
      </div>
      <div className="HomeDiv container"  data-aos="fade-up-right"  data-aos-easing="ease-in-back" data-aos-delay="1800">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
          <div className="col-lg-12 p-3 p-lg-5 pt-lg-3">
            <h2 className="display-4 fw-bold lh-1 text-light font-shalimar click-pointer" onClick={()=>{
              window.location.href = '/dhyana'
            }}> 
            <span style={{color:'gold'}}>
            Dhyana   &nbsp;
            </span>
             - Get Paid for doing Nothing at all

            </h2>
      </div>
        </div>
      </div>
      <div className="HomeDiv container" data-aos="fade-down-left"  data-aos-easing="ease-in-back" data-aos-delay="2300">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
          <div className="col-lg-12 p-3 p-lg-5 pt-lg-3">
            <h2 className="display-4 fw-bold lh-1 text-light font-shalimar click-pointer" onClick={()=>{
              window.location.href = '/home'
            }}> 
            <span style={{color:'gold'}}>Darshan &nbsp;</span>
            - Virtual Religious Tourism in VR. 
            </h2>
      </div>
        </div>
      </div>
      <div className="HomeDiv container"  data-aos="fade-down-right"  data-aos-easing="ease-in-back" data-aos-delay="2900">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
          <div className="col-lg-12 p-3 p-lg-5 pt-lg-3">
            <h2 className="display-4 fw-bold lh-1 text-light font-shalimar click-pointer" onClick={()=>{
              window.location.href = '/coming-soon'
            }}> 
            <span style={{color:'gold'}}>Kriya &nbsp;</span>
            - A Mythological game based in the year 3198 BC, set by Alien-Gods

            </h2>
      </div>
        </div>
      </div>
      <div className="HomeDiv container"  data-aos="fade-up-left"  data-aos-easing="ease-in-back" data-aos-delay="500">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
          <div className="col-lg-12 p-3 p-lg-5 pt-lg-3">
            <h2 className="display-4 fw-bold lh-1 text-light font-shalimar click-pointer" onClick={()=>{
              window.location.href = '/yoga'
            }}> 
            <span style={{color:'gold'}}>Yoga &nbsp;</span>
            - Perform Yoga. We pay you for that.

            </h2>
      </div>
        </div>
      </div>
      
      <UpperFooter />
      <Footer/>
            </div>}
            

      
      {/* <div className="HomeDiv container" data-aos="fade-down-right"  data-aos-easing="ease-in-back" data-aos-delay="500">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
          <div className="col-lg-12 p-3 p-lg-5 pt-lg-3">
            <h2 className="display-4 fw-bold lh-1 text-light font-shalimar"> 
            Satyug is a craftily designed Metaverse App + AAA Game (Unreal Engine 5 SDK), using “extraordinary incentive Models” and in-Game Assets with Real World Utilities” in the field of Religion and Spirituality, Yoga and Meditation, aided by the SatyugDAO (which aspires to be a Network State)
            </h2>
      </div>
        </div>
      </div> */}
      {/* <div className="HomeDiv container"  data-aos="fade-up-left"  data-aos-easing="ease-in-back" data-aos-delay="700">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
          <div className="col-lg-12 p-3 p-lg-5 pt-lg-3">
            <h2 className="display-4 fw-bold lh-1 text-light font-shalimar"> 
            The next wave of Web3 adoption will not be about DeFi and NFT's, it will be about Politics and Memes. <br/>
            <span className="click-pointer" style={{color:'#ff00ff'}} onClick={()=>{
              window.location.href = '/ram-setu'
            }}>Check out Ram-Setu</span>
            </h2>
      </div>
        </div>
      </div>
      <div className="HomeDiv container" data-aos="fade-up-right"  data-aos-easing="ease-in-back" data-aos-delay="1200">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
          <div className="col-lg-12 p-3 p-lg-5 pt-lg-3">
            <h2 className="display-4 fw-bold lh-1 text-light font-shalimar"> 
            Imagine if you are Mark Zuckerberg who has 10 billion Dollars and you have no way to spend it all, except the endless Modern-day Cycle of “Consumption”. You go ahead and buy back your own stocks ( which is another form of Consumption in Hope for Future appreciation) or you create a Metaverse with gated monetizable API’s (again which is Consumption at every incremental step) <br/>
            <span className="click-pointer" style={{color:'#ff00ff'}} onClick={()=>{
              window.location.href = '/coming-soon'
            }}>Check out Satyug DAO</span>
            </h2>
      </div>
        </div>
      </div>
      <div className="HomeDiv container"  data-aos="fade-down-left"  data-aos-easing="ease-in-back" data-aos-delay="1200">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
          <div className="col-lg-12 p-3 p-lg-5 pt-lg-3">
            <h2 className="display-4 fw-bold lh-1 text-light font-shalimar"> 
            Sex, Leverage, Religion and Spirituality have driven Humans since Time Immemorial.
Basically 90% of the World’s Jobs will be displaced by the year 2030, leading to abundance in human time, so why not create Monetary benefits from what people are really good at - Spirituality, Yoga, Meditation and Gaming and Virtual Religious Tourism ?

            </h2>
      </div>
        </div>
      </div> */}
      
    </div>
    
    </>
  );
}

export default Home;
