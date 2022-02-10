import React from 'react'
import ChickenIcon from '../assets/chicken/chicken-icon.jpg'
import BurgerIcon from '../assets/burgers/burger-icon.jpg'
import FriesIcon from '../assets/sides/fries-icon.png'
import DrinkIcon from '../assets/drinks/drink-icon.jpg'

const HeaderMenuList = () => {
  return (
    <div className='header-menu-list'>
      <div className='header-menu-icon'>
        <img src={ChickenIcon} alt='chicken icon' />
      </div>
      <div className='header-menu-icon'>
        <img src={BurgerIcon} alt='burger icon' />
      </div>
      <div className='header-menu-icon'>
        <img src={FriesIcon} alt='fries icon' />
      </div>
      <div className='header-menu-icon'>
        <img src={DrinkIcon} alt='drink icon' />
      </div>
    </div>
  )
}

export default HeaderMenuList