import React from 'react'

const FoodItem = ({ item }) => {
  const { title, price, description, image } = item
  return (
    <div className='food-item'>
      <div className='food-image'>
        <img src={image} alt='image of food'/>
      </div>
      <div className='food-title'>
        <p>{title}</p>
      </div>
      <div className='food-price'>
        <span>{price}</span>
      </div>
      <div className='food-description'>
        {description}
      </div>
      <div className='order-food-btn-container'>
        <button className='order-food-btn'>Order now</button>
      </div>
    </div>
  )
}

export default FoodItem