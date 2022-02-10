import React from 'react'
import HeaderLogoAndText from './header-logo-and-text'
import HeaderMenuList from './header-menu-list'

const Header = () => {
  return (
    <div className='header'>
      <HeaderLogoAndText />
      <HeaderMenuList />
    </div>
  )
}

export default Header