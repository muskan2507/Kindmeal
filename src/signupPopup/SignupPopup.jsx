import React from 'react'
import style from './popup.module.css'
import { useState } from "react";
import CustomPopup from "./CustomPopup";


const SignupPopup = () => {

    const [visibility, setVisibility] = useState(false);
 
    const popupCloseHandler = (e) => {
      setVisibility(e);
    };





    return (
<>
<button onClick={(e) => setVisibility(!visibility)} className={style.signup_btn}>Signup</button>
 


        <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
      >
        <div className={style.main_popup}>
            <img className={style.img2} src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="" />
            <h3>Join KindMeal For FREE Now</h3>
            <p style={{textAlign:"center"}}>Please select the type of membership to proceed</p>

            <div className={style.child_div}>
                <img className={style.img} src="https://www.kindmeal.my/images/join_normal.png" alt="food-lover" />
                <div>
                    <h4>Food Lover</h4>
                    <p>Join FREE to enjoy yummy deals, share reviews & meet our community of compassionate food lovers.</p>
                </div>
            </div>
            <div  className={style.child_div}>
                <img className={style.img} src="https://www.kindmeal.my/images/join_shop.png" alt="" />
               <div>
                <h4>Restaurant / Shop Owner</h4>
                <p>List your food outlet, create exciting vegetarian deals & showcase your delicious menu for FREE. Enjoy our yummy deals, share reviews & meet food lovers too.</p>
            </div>
            </div>
            <div className={style.flex}>
                <p>Member Login</p>
                <p>Forgot password?</p>
            </div>
        </div>
        </CustomPopup>
        </>
    )
}

export default SignupPopup