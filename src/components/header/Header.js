import React from 'react';
import './Header.css';
import logo from './images/logo.png';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img className='img' src={logo}  alt=''  />
        
         <h2>LEARN-BOOKER</h2>
      </div>
      <div className='header__center'>
          <ul className='header_lists'>
             <li><a href='#'>Home</a></li>
             <li><a href='#'>Services</a></li>
             <div className='header__centerMenu'>
                <button>Projects</button>
                <div className='dropDown_header'>
                  <a href='#'>Amazon</a>
                  <a href='#'>Obinna</a>
                  <a href='#'>Amaka</a>
                </div>
              </div>
        <li><a href='#'>Portfolio</a></li>
      </ul>

      </div>
      <div className='header__right'>
          <button>Sign up</button>
          <button>Sign in</button>
      </div>
    </div>
  )
}

export default Header