import React from "react";
import style from "../Styles/Home.module.css"

class Listhead3 extends React.Component {
  render() {
    return (
      <div className={style.listhead}>
        <h2>Amazing Superheroes</h2>
        <a
          className={style.save_life}
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
           .     Latest Buzz
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          {" "}
           .     Lifestyle Ambassadors
        </a>
        <a
          style={{
            color: "darkorange"
          }}
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
               .     Win Gifts!
        </a>
        <div className={style.listed_items}>
          <div>
            <a
              href="https://www.kindmeal.my/CarmenLee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./IMG/listed_homepage_4_1.png" alt />
            </a>
          </div>
          <div>
            <a
              href="https://www.kindmeal.my/BeeHuiYewvy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./IMG/listed_homepage_4_2.png" alt />
            </a>
          </div>
          <div>
            <a
              href="https://www.kindmeal.my/ShreenChong"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./IMG/listed_homepage_4_3.png" alt />
            </a>
          </div>
          <div>
            <a
              href="https://www.kindmeal.my/EvelynCYLim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./IMG/listed_homepage_4_4.png" alt />
            </a>
          </div>
          <div>
            <a
              href="https://www.kindmeal.my/RaindyLee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./IMG/listed_homepage_4_5.png" alt />
            </a>
          </div>
        </div>
        <div className={style.listpara}>
          <div>
            <a
              href="https://www.kindmeal.my/CarmenLee"
              target="_blank"
              rel="noopener noreferrer"
            >
              CarmenLee
            </a>
          </div>
          <div>
            <a
              href="https://www.kindmeal.my/BeeHuiYewvy"
              target="_blank"
              rel="noopener noreferrer"
            >
              BeeHuiYewvy
            </a>
          </div>
          <div>
            <a
              href="https://www.kindmeal.my/ShreenChong"
              target="_blank"
              rel="noopener noreferrer"
            >
              ShreenChong
            </a>
          </div>
          <div>
            <a
              href="https://www.kindmeal.my/EvelynCYLim"
              target="_blank"
              rel="noopener noreferrer"
            >
              EvelynCYLim
            </a>
          </div>
          <div>
            <a
              href="https://www.kindmeal.my/RaindyLee"
              target="_blank"
              rel="noopener noreferrer"
            >
              RaindyLee
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Listhead3;