import React from 'react'
import logo from '../assets/chicknburger.png'

const Header = () => {
  return (
    <div>
      <img src={logo} alt='chicknburger logo'/>
      <h2>Chick'N'Burgers</h2>
      <p>Chicken and burgers, anytime, anywhere</p>
    </div>
  )
}

export default Header