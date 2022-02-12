import React from 'react'
import HeaderLogoAndText from './header-logo-and-text'
import HeaderMenuList from './header-menu-list'

const Header = ({ setSelectedFoodCategory }) => {
  return (
    <div className='header'>
      <HeaderLogoAndText />
      <h2>Satisfy your cravings now!</h2>
      <HeaderMenuList setSelectedFoodCategory={setSelectedFoodCategory} />
    </div>
  )
}

export default Header