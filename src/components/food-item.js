import React from 'react'
import Chicken1 from '../assets/chicken/jollibee-chicken.png'

const FoodItem = () => {
  return (
    <div className='food-item'>
      <div className='food-image'>
        <img src={Chicken1} alt='image of food'/>
      </div>
      <div className='food-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non fringilla erat. Vestibulum elementum enim.
      </div>
      <div className='order-food-btn-container'>
        <button className='order-food-btn'>Order now</button>
      </div>
    </div>
  )
}

export default FoodItem