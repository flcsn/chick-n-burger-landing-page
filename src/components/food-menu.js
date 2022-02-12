import React from 'react'
import FoodItem from './food-item'
import chickenItems from '../assets/chicken/chicken-items'
import burgerItems from '../assets/burgers/burger-items'
import sideItems from '../assets/sides/side-items'
import drinkItems from '../assets/drinks/drink-items'

const FoodMenu = ({ selectedFoodCategory }) => {
  let foodItemsToDisplay = []

  if (selectedFoodCategory === 'chicken')
    foodItemsToDisplay = chickenItems
  else if (selectedFoodCategory === 'burgers')
    foodItemsToDisplay = burgerItems
  else if (selectedFoodCategory === 'sides')
    foodItemsToDisplay = sideItems
  else if (selectedFoodCategory === 'drinks')
    foodItemsToDisplay = drinkItems

  return (
    <div className='food-menu'>
      {foodItemsToDisplay.map(item =>
        <FoodItem key={item.title} item={item} />)
      }
    </div>
  )
}

export default FoodMenu