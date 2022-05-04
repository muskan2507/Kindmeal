import logo from './logo.svg';
import './App.css';
import Listhead from './components/home/Listhead';
import Listhead1 from "./components/home/Listhead1";
import Listhead2 from "./components/home/Listhead2";
import Listhead3 from "./components/home/Listhead3";
import Pet_finder from "./components/home/Pet_finder";
import Find_deals from "./components/home/Find_deals";
import Any_restaurant from "./components/home/Any_restaurant";
import Btn_red from "./components/home/Btn_red";
import As_featured_in from './components/home/As_featured_in';



function App() {
  return (
    <div className="App">
      <Listhead/>
      <Listhead1/>
      <Listhead2/>
      <Listhead3/>
      <Pet_finder/>
      <Find_deals/>
      <Any_restaurant/>
      <Btn_red/>
      <As_featured_in/>
    </div>
  );
}

export default App;
