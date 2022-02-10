import React from 'react'
import Chicken1 from '../assets/chicken/jollibee-chicken.png'

const FoodItem = () => {
  return (
    <div className='food-item'>
      <div className='food-image'>
        <img src={Chicken1}></img>
      </div>
      <div className='food-description'>
        sample description
      </div>
      <div className='order-food-btn'>
        <button>Order now</button>
      </div>
    </div>
  )
}

export default FoodItem