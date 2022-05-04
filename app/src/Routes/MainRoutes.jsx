import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Data from '../Pages/Data'
import Help from '../Pages/Help'
import Home from '../Pages/Home'
import Join from '../Pages/Join'
import JoinShop from '../Pages/JoinShop'
import JoinSuccess from '../Pages/JoinSuccess'
import MealDeals from '../Pages/MealDeals'
const MainRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/deals" element={<MealDeals/>}/>
            <Route path="/join" element={<Join/>}/>
            <Route path="/joinshop" element={<JoinShop/>}/>
            <Route path="/joinsuccess" element={<JoinSuccess/>}/>
            <Route path="/help" element={<Help/>}/>
            
        </Routes>
        <Footer/>
    </div>
  )
}

export default MainRoutes