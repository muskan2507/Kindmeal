import React from "react";

class Find_deals extends React.Component {
  render() {
    return (
      <div id="find_deals">
        <div className="intro_feature">
          <a href="./meal_deals.html" target="_blank" rel="noopener noreferrer">
            <img src="./IMG/intro_deal_homepage.png" alt />
          </a>
          <br />
          Get Great Deals
          <div className="intro_content">
            Show our FREE digital coupons to instantly enjoy exciting deals
          </div>
        </div>
        <div className="intro_feature">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="./IMG/intro_kindmoment_homepage.png" alt />
          </a>
          <br />
          Share KindMoments
          <div className="intro_content">
            Spread the joy by sharing your yummy dining moments
          </div>
        </div>
        <div className="intro_feature">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="./IMG/intro_menu_homepage.png" alt />
          </a>
          <br />
          Discover Delicious Food
          <div className="intro_content">
            Explore the latest exquisite offerings and creative menus
          </div>
        </div>
        <div className="intro_feature">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="./IMG/intro_friends_homepage.png" alt />
          </a>
          <br />
          Meet Food Lovers
          <div className="intro_content">
            Make new, compassionate friends and share great food tips
          </div>
        </div>
      </div>
    );
  }
}

export default Find_deals;
