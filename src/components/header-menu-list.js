import React from 'react'
import ChickenIcon from '../assets/chicken/chicken-icon.jpg'
import BurgerIcon from '../assets/burgers/burger-icon.jpg'
import FriesIcon from '../assets/sides/fries-icon.png'
import DrinkIcon from '../assets/drinks/drink-icon.jpg'

const HeaderMenuList = ({ setSelectedFoodCategory }) => {
  return (
    <ul className='header-menu-list'>
      <li>
        <div className='header-menu-icon' onClick={() => setSelectedFoodCategory('chicken')}>
          <img src={ChickenIcon} alt='chicken icon' />
        </div>
        <p>Chicken</p>
      </li>
      <li>
        <div className='header-menu-icon' onClick={() => setSelectedFoodCategory('burgers')}>
          <img src={BurgerIcon} alt='burger icon' />
        </div>
        <p>Burgers</p>
      </li>
      <li>
        <div className='header-menu-icon' onClick={() => setSelectedFoodCategory('sides')}>
          <img src={FriesIcon} alt='fries icon' />
        </div>
        <p>Sides</p>
      </li>
      <li>
        <div className='header-menu-icon' onClick={() => setSelectedFoodCategory('drinks')}>
          <img src={DrinkIcon} alt='drink icon' />
        </div>
        <p>Drinks</p>
      </li>
    </ul>
  )
}

export default HeaderMenuList