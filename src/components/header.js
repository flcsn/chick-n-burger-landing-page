import React from 'react'
import HeaderLogoAndText from './header-logo-and-text'
import HeaderMenuList from './header-menu-list'

const Header = ({ setSelectedFoodCategory }) => {
  return (
    <div className='header'>
      <HeaderLogoAndText />
      <HeaderMenuList setSelectedFoodCategory={setSelectedFoodCategory} />
    </div>
  )
}

export default Header