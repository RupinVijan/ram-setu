import React from 'react'

function NotFound() {
    setInterval(() => {
        window.location.href="/"
    }, 4000);
  return (
    <div>
        <img src='https://wallpapercave.com/wp/wp10338216.jpg' alt='coming soon'  style={{height:'100vh',width:'100vw'}}/>
    </div>
  )
}

export default NotFound