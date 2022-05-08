import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import style from "../Styles/Home.module.css";
const ListHead = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(`http://localhost:8080/superHeroes?_limit=5`);
        let data = await res.json();
        setData(data);
        // console.log(data)
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // console.log(data)
  }, []);
  return (
    <div className={style.box}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ fontSize: "20px" }}>Amazing Superheroes</p>
        <p style={{ fontSize: "17px" }}>
          <a href="https://www.kindmeal.my/buzz.htm">Latest Buzz</a>  |  
          <a href="https://www.kindmeal.my/ambassadors.htm">
            Lifestyle Ambassadors
          </a>{" "}
           |  <a href="https://www.kindmeal.my/superhero.htm">Win Gifts!</a>
        </p>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {data.map((e) => {
          return (
            <div style={{ width: "170px", textAlign: "center" }} key={e.id}>
              <img src={e.img} />
              <p style={{ textAlign: "center", fontSize: "12px" }}>{e.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListHead;
