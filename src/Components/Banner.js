import React from 'react'
import "./Banner.css"

function Banner() {
  return (
   <div>
    <div className='banner'>
      <img src="background.png" className='background' alt="background"></img>
    <h1 className="fresh">Fresh</h1>
    <h1 className="year">2022</h1>
    <h1 className="look">Look</h1>
    <div className="yellowbg"></div>
    
    <div className='jacket'>Oreon Jacket</div>
    <div className='jacket-price'>$124</div>
    <div className='star3'><img src="Star 3.png"></img></div>
    <div className='jessica'><img src="jessica.png"></img></div>
    <img src="Line 19.png" className='seemore-line'alt='seemore-line'></img>
    <img src="Star 4.png" className='star4'alt='star4'></img>

    <div className='seemore-parent'>
      <div className='seemore'>See more
      <div className='vector'><img src="Vector.png"></img></div>
      </div>
    </div>
    </div>
   
    
    
    
    




   </div>
  )
}

export default Banner