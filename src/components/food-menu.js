import React from 'react'
import FoodItem from './food-item'
import chickenItems from '../assets/chicken/chicken'

const FoodMenu = ({ selectedFoodCategory }) => {
  let foodItemsToDisplay = []

  if (selectedFoodCategory === 'chicken')
    foodItemsToDisplay = chickenItems

  return (
    <div className='food-menu'>
      {foodItemsToDisplay.map(item =>
        <FoodItem key={item} item={item} />)
      }
    </div>
  )
}

export default FoodMenu