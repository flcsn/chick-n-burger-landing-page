import React from 'react'
import logo from '../assets/chicknburger.png'
import HeaderMenuList from './header-menu-list'

const Header = () => {
  return (
    <div className='header'>
      <img className='header-logo' src={logo} alt='chicknburger logo'/>
      <div className='header-text'>
        <h2>Chick'N'Burgers</h2>
        <p>Chicken and burgers, anytime, anywhere</p>
      </div>
      <HeaderMenuList />
    </div>
  )
}

export default Header