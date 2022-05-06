
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddDirectory from "./components/AddDirectory";

import Directory from "./components/Directory";
import Help from "./components/Help";
import Sliding from "./components/Sliding";
import LoginPopup from "./signupPopup/LoginPopup";
import SignupPopup from "./signupPopup/SignupPopup";

import Recipe from "./Recipes/Recipe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MealDeals from "./MealDeals/MealDeals";




function App() {
 

  return (
    <div className="App">
 <Navbar/>
 

<Routes>

  <Route path="/" element={<Sliding/>} />
 <Route path="/directory" element={<Directory/>} /> 
 

  <Route path="/addshop" element={<AddDirectory/>}/>

 {/* <Route path="/loginwindow" element={<LoginPopup/>}/> */}

 <Route path="/mealdeals" element={<MealDeals/>} />
 <Route path="/help" element={<Help/>} />
 <Route path="/recipes" element={<Recipe/>} />



</Routes> 

{/* <LoginPopup/>
<SignupPopup/> */}

{/* <Sliding/> */}

{/* <AddDirectory/> */}
{/* <Directory/> */}
{/* <Help/> */}




{/* <Recipe/> */}

{/* <MealDeals/> */}

<Footer/>
    </div>
  );
}

export default App;
