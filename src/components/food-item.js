import React from 'react'

const FoodItem = ({ image }) => {
  return (
    <div className='food-item'>
      <div className='food-image'>
        <img src={image} alt='image of food'/>
      </div>
      <div className='food-title'>
        <p>Chicken</p>
      </div>
      <div className='food-price'>
        <span>PhP 500.00</span>
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