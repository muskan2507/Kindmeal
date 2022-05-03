import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Home from '../Pages/Home'
import MealDeals from '../Pages/MealDeals'
const MainRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/deals" element={<MealDeals/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default MainRoutes