import logo from './logo.svg';
import './App.css';
import { Banner } from './components/Banner';
import { FruitDetails } from './components/FruitDetails';
import { MealDeals, SpecialBannerImg } from './components/MealDeals';
import { Review } from './components/review';
function App() {
  return (
    <div className="App">
     < Banner/>
     < FruitDetails />
     <MealDeals/>
     <SpecialBannerImg/>
     <Review />
    </div>
  );
}

export default App;
