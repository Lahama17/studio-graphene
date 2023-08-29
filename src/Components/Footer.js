import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div>

        <div className='footer-body'>
            <img src="footer-image.png" className='footer-image' alt="footer-image"></img>
        </div>
        <div className='newsletter'>Newsletter</div>
        <p className='footer-about'>Get news about articles and updates in your inbox.</p>
        
        <div className='footername'>Name</div>
        <img src="Line 19.png" className='nameline' alt="nameline"></img>
        <div className='footeremail'>Email</div>
        <img src="Line 19.png" className='emailline' alt="emailline"></img>
        <div className='footermessage'>Message</div>
        <img src="Line 19.png" className='messageline' alt="messageline"></img>
        
        <h1 className='getintouch'>Get In Touch</h1>
        
       
        <img src="send.png" className='send-image' alt="send-image"></img>
        <div className='send'>
            Send
        </div>
      
    </div>
  )
}

export default Footer