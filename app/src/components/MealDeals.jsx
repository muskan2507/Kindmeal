import React from "react";

const MealDeals = () => {
  return (
    <div>
      <div>
        <div
          style={{
            backgroundColor: "#ffffff",
            width: "1060px",
            height: "270px",
            margin: "auto",
            marginTop: "0px",
            marginBottom: "30px",
            padding: "0px 0px 0px 0px",
            border: "1px solid #dddddd",
            color: "#333333",
            boxShadow: "0px 0px 6px #e0e0e0",
            fontSize: "14px",
          }}
        >
          <a href="https://www.kindmeal.my/advertising.htm" target="_blank">
            <img
              src="https://www.kindmeal.my/images/ads/banner_advertising-1100x280.png"
              style={{ width: "100%" }}
              border="0"
            />
          </a>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#e0e0e0",
          height: "280px",
          verticalAlign: "middle",
          marginTop: "100px",
        }}
      >
        <img
          src="https://www.kindmeal.my/images/how_kindmeal_works.png"
          style={{
            marginLeft: "150px",
            marginTop: "30px",
            marginBottom: "0px",
          }}
        />
      </div>
    </div>
  );
};

export default MealDeals;
