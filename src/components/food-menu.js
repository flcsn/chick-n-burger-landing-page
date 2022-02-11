import React from 'react'
import FoodItem from './food-item'
import chickenItems from '../assets/chicken/chicken-items'
import burgerItems from '../assets/burgers/burger-items'

const FoodMenu = ({ selectedFoodCategory }) => {
  let foodItemsToDisplay = []

  if (selectedFoodCategory === 'chicken')
    foodItemsToDisplay = chickenItems
  else if (selectedFoodCategory === 'burgers')
    foodItemsToDisplay = burgerItems

  return (
    <div className='food-menu'>
      {foodItemsToDisplay.map(item =>
        <FoodItem key={item} item={item} />)
      }
    </div>
  )
}

export default FoodMenu