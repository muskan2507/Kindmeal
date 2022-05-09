import React, { useEffect, useState } from 'react'
import style from './Inner.module.css'

const InnerPage = () => {

    const [show, setShow] = useState([])

    useEffect(()=>{
     let cart=JSON.parse(localStorage.getItem("InnerPage"))
     setShow(cart)
    },[])
    
  return (
    <div className={style.userProfile}>
            
    {
       show.map((item)=>(
         <div>
            <div className={style.head_div}>
                <img src="https://www.kindmeal.my/photos/shop/5/501-c.jpg" alt="banner" />
                {/* https://www.kindmeal.my/images/default_member_cover-3.jpg */}


 

                <div className={style.username_div}>
                    <div>
                        <h1>{item.username}</h1>
                        <span className={style.dot}>&#8226;</span>
                        <h2>0 Followers</h2>
                    </div>
                    <div className={style.share_btn_div}>
                        <button>Share KindMoment</button>
                        <button>Share Recipe</button>
                    </div>
                </div>
            </div>

            <div className={style.user}>
                <div className={style.user_img}>
                    <img src={item.photo} alt="user-images" />
                </div>
                <div className={style.head_btn_div}>
                    <button>Edit Headshot</button>
                    <button>Edit Cover Photo</button>
                </div>


            </div>
        </div>


 
       ))}

    </div>
  )
}

export default InnerPage