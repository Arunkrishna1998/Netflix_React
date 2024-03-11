import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" />
      <div className='NavButtons'>
        <select className='ButtonLanguage'>
          <option value="english">English</option>
          <option value="spanish">Hindi</option>
        </select>
        <button className='ButtonSignin'>Sign In</button>
      </div>
    </div>
  )
}

export default NavBar
