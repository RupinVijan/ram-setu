import React from 'react'

function ComingSoon() {
    setInterval(() => {
        window.location.href="/"
    }, 4000);
  return (
    <div>
<img src='https://media.istockphoto.com/photos/coming-soon-neon-sign-the-banner-shining-light-signboard-collection-picture-id1332167985?b=1&k=20&m=1332167985&s=170667a&w=0&h=O-084eNJBhGZGJbJvNvUC1P6d4aSo6XkV4Kom7ZZcIQ=' alt='coming soon'  style={{height:'100vh',width:'100vw'}}/>
    </div>
  )
}

export default ComingSoon