import React from 'react'
import logo from '../assets/chicknburger2.png'

const HeaderLogoAndText = () => {
  return (
    <div className='header-logo-and-text'>
      <img className='header-logo' src={logo} alt='chicknburger logo'/>
      <div className='header-text'>
        <h1>Chick&apos;N&apos;Burgers</h1>
        <p>Chicken and burgers, anytime, anywhere</p>
      </div>
    </div>
  )
}

export default HeaderLogoAndText