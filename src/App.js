import React, { useState } from 'react'
import Header from './components/header'
import FoodMenu from './components/food-menu'

const App = () => {
  const [selectedFoodCategory, setSelectedFoodCategory] = useState('')

  return (
    <div>
      <Header setSelectedFoodCategory={setSelectedFoodCategory} />
      <FoodMenu selectedFoodCategory={selectedFoodCategory}/>
    </div>
  )
}

export default App
