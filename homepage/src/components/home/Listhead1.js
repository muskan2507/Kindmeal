import React from "react";

class Listhead1 extends React.Component {
  render() {
    return (
      <div className="listhead1">
        <h2>Yummylicious Moments</h2>
        <a
          className="save_life"
          href="./recepie.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
             .     Secret Recipes
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          {" "}
             .     Member Hot Picks
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          {" "}
             .    Photo Moments
        </a>
        <div className="listed_items">
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="./IMG/listed_homepage_2_1.png" alt />
            </a>
          </div>
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="./IMG/listed_homepage_2_2.png" alt />
            </a>
          </div>
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="./IMG/listed_homepage_2_3.png" alt />
            </a>
          </div>
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="./IMG/listed_homepage_2_4.png" alt />
            </a>
          </div>
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="./IMG/listed_homepage_2_5.png" alt />
            </a>
          </div>
        </div>
        <div className="listpara paranum_2">
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Alicor Vegetarian Organic Mart
            </a>
            <br />
            <span>ChewLengLeng</span>{" "}
          </div>
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              A Delicious KindMoment
            </a>
            <br />
            <span>william</span>
          </div>
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              A Delicious KindMoment
            </a>
            <br />
            <span>ChewLengLeng</span>{" "}
          </div>
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Creative Home-Style Dining
            </a>
            <br />
            <span>yoyo</span>
          </div>
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Vegan Thai Delights
            </a>
            <br />
            <span>yoyo</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Listhead1;
