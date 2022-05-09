import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import style from "../Styles/MealDeal.module.css"
const MealDeal = () => {
    const [show, setShow] = useState([]);
    const {id}=useParams()
  useEffect(() => {
    fetch(`http://localhost:8080/recipeData/${id}`)
      .then((res) => res.json())
      .then((data) => setShow(data))
      .catch((er) => console.log(er));
  }, []);
  return (
    <div>
         <div>
          <div className={style.head_div}>
            <img
              src="https://www.kindmeal.my/photos/member/14/14169-c.jpg"
              alt="banner"
            />

            <div className={style.username_div} key={show.id}>
              <div>
                <h1> <img src="https://www.kindmeal.my/images/icon_star.png"/>{show.author}</h1>
                <span className={style.dot}>&#8226;</span>
                <h2> Lifestyle Ambassador</h2>
                <span className={style.dot}>&#8226;</span>
                <h2>7 Followers</h2>
              </div>
              <div className={style.share_btn_div}>
                <button>Follow Member</button>
                <button>Contact Number</button>
              </div>
            </div>
          </div>

          <div className={style.user}>
            <div className={style.user_img}>
              <img src={show.logo} alt="user-images" />
            </div>
           
          </div>
        </div>  
    </div>
  )
}

export default MealDeal