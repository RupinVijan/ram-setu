import React from 'react'
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate()
  setTimeout(() => {
      navigate("/")
  }, 4000);
  return (
    <div style={{"backgroundColor" : "#09001C"}}>
        <img src='https://wallpapercave.com/wp/wp10338216.jpg' alt='coming soon'  style={{height:'100vh',width:'100vw' , objectFit : "contain" , objectPosition : "center"}}/>
    </div>
  )
}

export default NotFound