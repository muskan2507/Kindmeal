
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




function App() {
 

  return (
    <div className="App">
 <Navbar/>
 

<LoginPopup/>

{/* <Routes>
  <Route path="/addshop" element={<AddDirectory/>}/>
  <Route path="/" element={<Directory/>}/>
 

</Routes>  */}


<Sliding/>

{/* <AddDirectory/> */}
{/* <Directory/> */}
{/* <Help/> */}




<Recipe/>

<Footer/>
    </div>
  );
}

export default App;
