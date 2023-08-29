import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="nav-bar">
            <img src="truck.svg" alt="Truck" className="truck" />
            <div className="delivery">Free Delivery</div>
            <img src="Line11.png" alt="Devider" className="devider" />
            <div className="Return-policy">Return Policy</div>
            
                <div className='Login'>Login</div>
                <div className='Follow-us'>Follow Us</div>
                
                <div><img src="Facebook.svg" alt="Facebook" className="facebook" /></div>
                <div><img src="Linkedin.svg" alt="Linkedin" className="linkedin" /></div>
                <div><img src="Twitter.svg" alt="Twitter" className="twitter" /></div>
                <div><img src="Instagram.svg" alt="Instagram" className="instagram" /></div>
                
            
        </nav>
       

        
    );
};

export default Navbar;
