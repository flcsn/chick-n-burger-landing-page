import React, { useState } from 'react'
import Header from './components/header'
import FoodMenu from './components/food-menu'
import Divider from './components/divider'

const App = () => {
  const [selectedFoodCategory, setSelectedFoodCategory] = useState('')

  return (
    <div>
      <Header setSelectedFoodCategory={setSelectedFoodCategory} />
      <FoodMenu selectedFoodCategory={selectedFoodCategory}/>
      <Divider />
    </div>
  )
}

export default App
