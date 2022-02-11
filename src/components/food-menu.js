import React from 'react'
import FoodItem from './food-item'
import chickenImages from '../assets/chicken/chicken'

const FoodMenu = ({ selectedFoodCategory }) => {
  let foodImagesToDisplay = []

  if (selectedFoodCategory === 'chicken')
    foodImagesToDisplay = chickenImages


  return (
    <div className='food-menu'>
      {foodImagesToDisplay.map(image =>
        <FoodItem key={image} image={image} />)
      }
    </div>
  )
}

export default FoodMenu