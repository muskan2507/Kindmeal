import styles from "./fruitDetails.module.css"
export const FruitDetails=()=>{
  return(
    <div id={styles.Datils}>
      <div className={styles.DetailsHead}><h1>MBG Fruit Juice Deal</h1></div>
      <div className={styles.DetailContent}>
        <div  className={styles.LeftDetailContent}>
          <div><img src="https://www.kindmeal.my/photos/deal/3/301-722-l.jpg" alt="" />
           <div><h3>Offer Expires In 2 Days</h3></div>
          </div>
        </div>
        <div  className={styles.RightDetailContent}>
          
          <div className={styles.RightInnerDetailContent}>

          <div  className={styles.LeftContent}>
              <p style={{fontSize:"18px"}}>Normal Price</p>
              <p style={{fontSize:"37px",color:"#666666",fontWeight:"600"}}>RM8.40</p>
              <p style={{fontSize:"18px"}}>&#38; Above</p>
             
            </div>
            <div  className={styles.RightContent}>
              <p style={{fontSize:"18px"}}>KindMeal Discount</p>
              <p style={{fontSize:"37px",fontWeight:"600",color:"#19AB3F"}}>20% Off</p>
            </div>
           
          </div>

          <div style={{marginTop:"-173px",height:"200px",lineHeight:"50px"}} className={styles.BottomContent}>
            
            <div><p className={styles.p1}>No pre-payment or booking needed. Get coupon &#38; dine instantly!</p></div>
            <div><button className={styles.button2}><img src="https://www.kindmeal.my/images/icon_button_download.png" alt="" /> &nbsp; Get FREE Coupon</button></div>
            <div style={{fontSize:"14px" , fontWeight:"bold"}}><p>Grab this KindMeal Coupon now to enjoy 20% off! <a href="">How it works</a></p></div>
          </div>
        </div>





       
      </div>







      <div className={styles.Info}>

<div className={styles.LeftInfo}>

<div><p className={styles.Infohead}>Delicious Details</p>
<p className={styles.samep}>Enjoy discount from any of our signature fruit juices below:</p>
</div>

<div style={{lineHeight:"10px",marginTop:"20px"}} className={styles.samep}>
  <p>No 1 (Avocado + Date Sweetener + Yogurt + Milk) – RM12.70</p>
  <p>No 8 (Ginger + Kiwifruit + Green Apple) – RM9.40</p>
  <p>o 12 (Mango + Orange + Pineapple + Carrot) – RM9.40</p>
  <p>No 16 (Guava + Banana + Pineapple ) – RM9.40</p>
  <p>No 17 (Guava + Mango + Orange + Green Apple + Banana) – RM9.40</p>
  <p>No 20 (Orange + Watermelon + Yogurt) – RM8.40</p>
  <p>No 22 (Red Dragon + Red Apple + Orange) – RM8.40</p>
  <p>No 24 (Papaya + Banana + Milk) – RM8.40</p>
  <p>No 25 (Papaya + Orange + Pineapple) – RM8.40</p>
  <p>No 27 (Lemon + Orange + Banana) – RM8.40</p>
</div>

<div style={{marginTop:"20px"}} className={styles.samep}>Prices listed here are for general reference only
  . Please check the official price list
   at   shop when ordering.</div>

   <div style={{ marginTop:"30px"}} className={styles.samep}>Should you have any problems redeeming coupons at any MBG outlet
     , please contact our MBG manager 
     Jess Tee at +6016-2097602.</div>

     <div style={{marginTop:"20px",fontSize:"27px",fontWeight:"bold"}}>Diet Restriction</div>

     <div style={{marginTop:"20px"}} className={styles.icons}>
       <div><span><img src="https://www.kindmeal.my/images/icon_egg_disabled.png" alt="" />&nbsp;	No Eggs </span></div>
       <div><span><img src="https://www.kindmeal.my/images/icon_milk_disabled.png" alt="" />&nbsp; No Dairy / Milk</span></div>
       <div><span><img src="https://www.kindmeal.my/images/icon_alcohol_disabled.png" alt="" /><span >&nbsp;No Alcohol </span></span></div>
     </div>

     <div style={{marginTop:"40px",fontSize:"26px",fontWeight:"bold",display:"flex",gap:"20px"}}>
       <div>Rating</div>
    <div> <span><img src="https://www.kindmeal.my/images/icon_star.png" alt="" /></span>
     <span><img src="https://www.kindmeal.my/images/icon_star.png" alt="" /></span>
     <span><img src="https://www.kindmeal.my/images/icon_star.png" alt="" /></span>
     <span><img src="https://www.kindmeal.my/images/icon_star.png" alt="" /></span>
     <span><img src="https://www.kindmeal.my/images/icon_star.png" alt="" /></span></div>
     </div>

</div>

<div className={styles.RightInfo}>
  <div style={{fontSize:"27px",fontWeight:"bold"}}>Location (6 Outlets)</div>

  <div  style={{fontSize:"14px" , fontWeight:"bold",fontWeight:"bold"}}><p>Block D, F 20  21, First Floor, Sunway Giza Mall, No.2, Jalan PJU 5/14, PJU 5, Kota Damansara, 47810 Petaling Jaya, Selangor</p>
  <p>Opens: 10am - 10pm</p>
  <p>Tel: 016-220 9602</p>
  <p><a  style={{color:"#2184FF"}} href="">View All 6 Outlet Locations »</a></p></div>

  <div>
    <p style={{fontSize:"27px",fontWeight:"bold"}}> Terms &#38; Conditions</p>
  </div>

  <div className={styles.TermInfo}>

    <div className={styles.info2}>
      <div style={{ fontWeight:"bold"}}><p>Coupon Validity</p></div>
         <div style={{fontSize:"14px" , fontWeight:"bold"}}><p>Must use coupon by <span style={{color:"red"}}>May 10th, 2022</span></p></div>
    </div>

    <div className={styles.info2}>
      <div style={{ fontWeight:"bold"}}><p>Exclusivity</p></div>
      <div style={{fontSize:"14px" , fontWeight:"bold"}}><p>Valid with other KindMeal.my coupons only</p></div>
    </div>

    <div className={styles.info2}>
      <div style={{ fontWeight:"bold"}}><p>Reservation</p></div>
      <div style={{fontSize:"14px" , fontWeight:"bold"}}><p>Not required</p></div>
    </div>

    <div className={styles.info2}>
      <div style={{ fontWeight:"bold"}}><p>Repeat Customers</p></div>
      <div style={{fontSize:"14px" , fontWeight:"bold"}}><p>You can get this coupon once per week</p></div>
    </div>

    <div className={styles.info2}>
      <div style={{ fontWeight:"bold"}}><p>Dining Terms</p></div>
      <div style={{fontSize:"14px" , fontWeight:"bold"}}>
        <ul>
          <li>Price includes Service Charge  SST</li>
          <li>Wifi Not Available - Please ensure your mobile has Internet connection to activate your coupon</li>
          <li>Coupon may be used for purchasing multiple items.</li>
          <li>Prices listed here are for general reference only. Please check the official price list at shop when ordering.</li>
          <li>Should you have any problems redeeming coupons at any MBG outlet, please contact our MBG manager Jess Tee at +6016-2097602.</li>
        </ul>
      </div>
    </div>

  </div>

</div>
</div>



<div className={styles.iceCremImg}>

    <div><img src="https://www.kindmeal.my/photos/deal/3/301-676-s.jpg" alt="" /></div>
    <div><img src="https://www.kindmeal.my/photos/deal/3/301-677-s.jpg" alt="" /></div>
    <div><img src="https://www.kindmeal.my/photos/deal/3/301-678-s.jpg" alt="" /></div>
    <div><img src="https://www.kindmeal.my/photos/deal/3/301-679-s.jpg" alt="" /></div>
    <div><img src="https://www.kindmeal.my/photos/deal/3/301-717-s.jpg" alt="" /></div>
    <div><img src="https://www.kindmeal.my/photos/deal/3/301-718-s.jpg" alt="" /></div>
    <div><img src="https://www.kindmeal.my/photos/deal/3/301-719-s.jpg" alt="" /></div>
    <div><img src="https://www.kindmeal.my/photos/deal/3/301-720-s.jpg" alt="" /></div>

</div>




    </div>
  )
}


