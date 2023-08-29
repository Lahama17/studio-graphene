import React, { useState } from 'react';
import './DropdownMenu.css';

const DropdownMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    if (showDropdown) {
      document.querySelector('.dropbtn').classList.add('active');
    } else {
      document.querySelector('.dropbtn').classList.remove('active');
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item1">
          <a href="#">Home</a>
        </li>
        <li className="nav-item2">
          <a href="#">About</a>
        </li>

        <li className="nav-item3">
          <div className="dropdown">
          <div className="dropbtn" onClick={toggleDropdown} style={{ textDecoration: 'none' }}>
              Our Products
            </div>
            {showDropdown && (
               <div className="dropdown-content" >
                <div className='product-link'>Product 1</div>
                <div className='product-link'>Product 2</div>
                <div className='product-link'>Product 3</div>
                <div className='product-link'>Product 4</div>
              </div>
            )}
          </div>
        </li>
        <li className="nav-item4">
          <a href="#">Contact Us</a>
        </li>
      </ul>
     
    </nav >
  );
};

export default DropdownMenu;