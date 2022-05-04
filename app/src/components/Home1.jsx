import React from "react";
import style from "../Styles/Home.module.css"
class Listhead2 extends React.Component {
  render() {
    return (
      <div className={style.listhead2}>
        <h2>Discover Restaurants</h2>
        <a
          className={style.save_life}
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
             .    Vegetarian Directory
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          {" "}
             .    Restaurant Menu
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          {" "}
             .    Food Map
        </a>
        <div className={style.listed_items}>
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="./IMG/listed_homepage_3_1.png" alt />
            </a>
          </div>
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="./IMG/listed_homepage_3_2.png" alt />
            </a>
          </div>
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="./IMG/listed_homepage_3_3.png" alt />
            </a>
          </div>
          <div>
            <a
              href="https://www.kindmeal.my/MBG/menu.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./IMG/listed_homepage_3_4.png" alt />
            </a>
          </div>
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="./IMG/listed_homepage_3_5.png" alt />
            </a>
          </div>
        </div>
        <div className={style.listpara}>
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Gintonica
            </a>
          </div>
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Mille Crepe & Green Tea Latte
            </a>{" "}
          </div>
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Cheese and Egg Sandwich
            </a>
          </div>
          <div>
            <a
              href="https://www.kindmeal.my/MBG/menu.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cherry Box
            </a>
          </div>
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Garden Burger
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Listhead2;