import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddDirectory from '../components/AddDirectory'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Article from '../Pages/Article'
import Articles from '../Pages/Articles'
import Directory from '../Pages/Directory'

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
            <Route path="/articles" element={<Articles/>}/>
            <Route path="/articles/:id" element={<Article/>}/>
            <Route path="/directory" element={<Directory/>}/>
            <Route path="/directory/addshop" element={<AddDirectory/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default MainRoutes