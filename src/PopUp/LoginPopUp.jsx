import React from 'react'
import style from './popup.module.css'
import { useState } from "react";
import CustomPopup from "./CustomPopup";
import { useLocation } from 'react-router-dom';

const LoginPopup = () => {
const [formData, setFormData]= useState({})
    const [visibility, setVisibility] = useState(false);
 
    const location = useLocation()

    const popupCloseHandler = (e) => {
      setVisibility(e);
    };

const handleSubmit=(e)=>{
e.preventDefault()
window.location.href = "../"


}

const handleChange=(e)=>{
let inputName= e.target.name;
setFormData({...formData, [inputName]: e.target.value})

}
console.log(formData);

// const handleLogin=()=>{
//     window.open("/directory")
// }






    return (
<>
<button onClick={(e) => setVisibility(!visibility)} className={style.signup_btn}>Login</button>
 


        <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
      >
          <form>
        <div className={style.main_popup}>
            <img className={style.img2} src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="images" />
            <h3>Member Login</h3>
            <div className={style.login_input}>
           <input type="text" placeholder='Your Email' name='email' onChange={handleChange}/>
           <input type="text" placeholder='Your Password' name='password' onChange={handleChange}/>

          <div>
              
              <button className={style.btn_login}  onClick={handleSubmit}>Login</button>
<hr />

<button className={style.btn_facebook}>
    <img src="https://www.kindmeal.my/images/icon_button_fb.png" alt="facebook" className={style.facebook_logo}/>
    Login With Facebook</button>
            </div>
            </div> 


            <div className={style.flex}>
                <p>Forgot password?</p>
                <p>Not a member? Sign up FREE!</p>
            </div>
        </div>
        </form>
        </CustomPopup>
        </>
    )
}

export default LoginPopup