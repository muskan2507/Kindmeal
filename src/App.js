
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddDirectory from "./components/AddDirectory";
import Article from "./components/Article";
import Directory from "./components/Directory";
import Help from "./components/Help";
import Sliding from "./components/Sliding";


function App() {
 

  return (
    <div className="App">

<Routes>
  <Route path="/addshop" element={<AddDirectory/>}/>
  <Route path="/" element={<Directory/>}/>

</Routes>


{/* <Sliding/> */}

{/* <AddDirectory/> */}
{/* <Directory/> */}
{/* <Help/> */}



    </div>
  );
}

export default App;
