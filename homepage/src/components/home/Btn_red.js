import React from "react";

class Btn_red extends React.Component {
  render() {
    return (
      <div
        onclick="document.location.href='./signup.html';"
        className="btn_red"
      >
        <div
          style={{
            paddingTop: "18px"
          }}
        >
          Join KindMeal Now
        </div>
        <div id="tasty_journey">
          <br />
          Your tasty journey begins here
          <br />
        </div>
      </div>
    );
  }
}

export default Btn_red;
