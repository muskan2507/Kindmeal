import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import MealDeals from './Pages/MealDeals';
import KindMoments from './Pages/KindMoments';
import HotPicks from './Pages/HotPicks';
import Recipes from './Pages/Recipes';
import Directory from './Pages/Directory';
import Articles from './Pages/Articles';
import Help from './Pages/Help';

function App() {
  return (
    <div className="App">
      <Navbar/>   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mealdeals' element={<MealDeals/>}/>
        <Route path='/kindmoments' element={<KindMoments/>}/>
        <Route path='/hotpicks' element={<HotPicks/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/directory' element={<Directory/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/help' element={<Help/>}/>
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
