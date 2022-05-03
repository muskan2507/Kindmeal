import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import MealDeals from '../components/MealDeals'
const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/deals" element={<MealDeals/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes