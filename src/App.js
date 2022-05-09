
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import InnerPage from "./Inner/InnerPage";
import Inner from "./Innerpage/Inner";
// import AddDirectory from "./components/AddDirectory";

// import Directory from "./components/Directory";
// import Help from "./components/Help";
// import Sliding from "./components/Sliding";
// import LoginPopup from "./signupPopup/LoginPopup";
// import SignupPopup from "./signupPopup/SignupPopup";

// import Recipe from "./Recipes/Recipe";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import MealDeals from "./MealDeals/MealDeals";
// import UserProfile from "./UserProfile/UserProfile";
import MainRoutes from "./Routes/MainRoutes";

import Progress from "./UserProfile/Progress";
import UserProfile from "./UserProfile/UserProfile";




function App() {
 

  return (
    <div className="App">
 {/* <Navbar/> */}
 

{/* <Routes> */}

  {/* <Route path="/" element={<Sliding/>} /> */}
  {/* <Route path="/" element={<UserProfile/>}/>
 <Route path="/directory" element={<Directory/>} /> 
 

  <Route path="/addshop" element={<AddDirectory/>}/> */}

 {/* <Route path="/loginwindow" element={<LoginPopup/>}/> */}
{/* 
 <Route path="/mealdeals" element={<MealDeals/>} />
 <Route path="/help" element={<Help/>} />
 <Route path="/recipes" element={<Recipe/>} /> */}



{/* </Routes>  */}

{/* <LoginPopup/>
<SignupPopup/> */}

{/* <Sliding/> */}

{/* <AddDirectory/> */}
{/* <Directory/> */}
{/* <Help/> */}
{/* <Recipe/> */}
<MealDeals/>
{/* <Footer/> */}


{/* <MainRoutes/> */}


{/* <UserProfile/> */}

{/* <Inner/> */}

{/* <InnerPage/> */}

    </div>
  );
}

export default App;
