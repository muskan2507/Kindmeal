import React from 'react'
import styles from '../Styles/Recip.module.css'

const Recipe = () => {
  return (
    <div>
               <div><img className={styles.BannerImg} src="https://www.kindmeal.my/photos/shop/6/603-c.jpg" alt="" />
       <div className={styles.BanneroverHead}><h1>MBG Fruit Shop</h1></div>
      
      <div id={styles.overBanner}>
        <div><img src="https://www.kindmeal.my/photos/shop/2/244-1236-l.jpg" alt="" /></div>
        <div className={styles.navRoutes}>
          <a href="">Overview</a>
          <a href="">Meal Deals</a>
          <a href="">Food Menu</a>
          <a href="">Location</a>
        </div>
        <div>
          <div className={styles.Media}>
            <div><button><a href=""><i class="fa-brands fa-twitter"></i> Tweet</a></button></div>
            <div><button><a href="">Share</a></button></div>
            <div><button><a href=""><i class="fa-solid fa-thumbs-up"></i> Like</a></button></div>
          </div>
        </div>
      </div>
      </div>
      {/* ///////////////////////////////////////////// */}
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
    {/* /////////////////////////////////////////////////////////// */}
    {/* /////////////////////////////////////////////////////////////// */}
    <div className={styles.MealDeals}>
      <div className={styles.MealDealsHead}>
        <span>  Other Exciting Meal Deals</span>
        <span ><a href="" style={{color:"#2184FF"}}>View More Deals »</a></span>
      </div>

      <div className={styles.MealDealsCards}>
        <div className={styles.innerCard} >
          <div>
            <img src="https://www.kindmeal.my/photos/deal/2/271-519-m.jpg" alt="" />
              <div className={styles.mealsOff}>
                <p className={styles.offText}>-20%</p>
                </div>
          </div>
          <div>
            <p>Salads, Sammich and Juices For 2, Salad ..</p>
          </div>
        </div>
       
        <div className={styles.innerCard}>
          <div>
            <img src="https://www.kindmeal.my/photos/deal/6/658-4144-m.jpg" alt="" />
            <div className={styles.mealsOff}>
                <p className={styles.offText}>-20%</p>
                </div>
          </div>
          <div>
            <p>Exquisite Thai Flavors, VegeThai</p>
          </div>
        </div>

        <div className={styles.innerCard}>
          <div>
            <img src="https://www.kindmeal.my/photos/deal/6/615-3466-m.jpg" alt="" />
            <div className={styles.mealsOff}>
                <p className={styles.offText}>-15%</p>
                </div>
          </div>
          <div>
            <p>Blissful, Nutritious Experience, Blissfu..</p>
          </div>
        </div>

        <div className={styles.innerCard}>
          <div>
            <img src="https://www.kindmeal.my/photos/deal/7/707-4819-m.jpg" alt="" />
            <div className={styles.mealsOff}>
                <p className={styles.offText}>-10%</p>
                </div>
          </div>
          <div>
            <p>Simple Is the Best, Simple Garden Cafe</p>
          </div>
        </div>


        <div className={styles.innerCard}>
          <div>
            <img src="https://www.kindmeal.my/photos/deal/6/687-4507-m.jpg" alt="" />
            <div className={styles.mealsOff}>
                <p className={styles.offText}>-10%</p>
                </div>
          </div>
          <div>
            <p>Healthy, Homely Meals, Alam N-Ion</p>
          </div>
        </div>

      </div>
    </div>
    <div className={styles.SpecialBannerImg}><img src="https://www.kindmeal.my/images/ads/banner_janegoodall_message.jpg" alt="" /></div>
         {/* ///////////////////////////////////////////////////////// */}
         {/* ///////////////////////////////////////////////////////////// */}
         <div className={styles.review}>


    <div className={styles.LeftReview}>
      <div className={styles.ReviewHead}><p>Need Help?</p></div>
      <div className={styles.comment} style={{marginTop:"30px"}}><p>Do you have any questions or feedback regarding this deal? Please write to the shop for further assistance.
</p></div>

<div className={styles.reviewButton}>
  <button>Contact Shop</button>
</div>

<div className={styles.help}>
  <p>
  If you require general help regarding KindMeal 
  and using coupons, please visit the &nbsp;
   <span><a href="">Help Page.</a></span>

  </p>
</div>

    </div>


    <div className={styles.RightReview}>

    <div className={styles.ReviewHead}><p >Reviews</p></div>



    <div className={styles.Frame}>
      <div className={styles.innerFrame}>
        <div className={styles.frame1img}><img src="https://www.kindmeal.my/photos/member/10/10038-s.jpg" alt="" /></div>
        <div >
          <div><span><b>Piggy Loves To Eat,</b></span><span> Oct 11th 2015</span></div>
          <div className={styles.starImgs}>
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
          </div>
          <div className={styles.comment}><p>My hair turns green after drinking green juice No.8 Ginger + Kiwi + Green Apple! It gives you warmth in the cold air conditioned mall. Ordered with no ice as my usual practice, and it's not diluted! Thanks to the 20% discount from @KindMeal.my #KindMeal @mbgfruitshop</p></div>
        </div>
      </div>
      <div className={styles.frame2img}>
        <img src="https://www.kindmeal.my/photos/moment/5/5599-5415-m.jpg" alt="" />
        <p style={{marginTop:"-2px",textAlign:"center"}}>View Moment</p>
      </div>
    </div>

    <hr />



    <div className={styles.Frame}>
      <div  className={styles.innerFrame}>
        <div className={styles.frame1img}><img src="https://www.kindmeal.my/photos/member/11/11074-s.jpg" alt="" /></div>
        <div>
          <div><span><b>Shals Loh,</b></span> Nov 14th 2015<span></span></div>
          <div className={styles.starImgs}>
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
          </div>
          <div className={styles.comment}><p>Totally refreshing  it is a expencive test and helthfull Totally refreshing  it is a expencive test and helthfull Totally refreshing  it is a expencive test and helthfull</p></div>
        </div>
      </div>
      <div  className={styles.frame2img} >
        <img src="https://www.kindmeal.my/photos/moment/6/6042-5849-m.jpg" alt="" />
        <p>View Moment</p>
      </div>
    </div>

    <hr />



    <div className={styles.Frame}>
      <div  className={styles.innerFrame}>
        <div className={styles.frame1img}><img src="https://www.kindmeal.my/photos/member/17/17025-s.jpg" alt="" /></div>
        <div>
          <div><span><b>Ando Kit,  </b></span> Jan 12th 2016<span></span></div>
          <div className={styles.starImgs}>
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
          </div>
          <div className={styles.comment}><p>Love my juice~ lol..i should choose 20% off before~ huhuhu~no.4~XD t seems like the staff weren't aware of the existence of this offer. Took them awhile to figure out how to key into the system, but I receive the discount in the end.</p></div>
        </div>
      </div>
      <div  className={styles.frame2img} >
        <img src="https://www.kindmeal.my/photos/moment/6/6695-6488-m.jpg" alt="" />
        <p>View Moment</p>
      </div>
    </div>

    <hr />



    <div className={styles.Frame}>
      <div  className={styles.innerFrame}>
        <div className={styles.frame1img}><img src="https://www.kindmeal.my/photos/member/17/17025-s.jpg" alt="" /></div>
        <div>
          <div><span></span><b>Ando Kit,  </b><span> Jan 21st 2016</span></div>
          <div className={styles.starImgs}>
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
          </div>
          <div className={styles.comment}><p>LOL~ my 1st 20% off!! hahaha~ ok~ try no.1~ quite concentrated...hmm..maybe because of yogurt~
             but yeah~ i still love it..hehehe~ this MBG one near my workplace~ can come regular lo.. XD</p></div>
        </div>
      </div >
      <div  className={styles.frame2img}>
        <img src="https://www.kindmeal.my/photos/moment/6/6807-6599-m.jpg" alt="" />
        <p>View Moment</p>
      </div>
    </div>

    <hr />



    <div className={styles.Frame}>
      <div  className={styles.innerFrame}>
        <div className={styles.frame1img}><img src="https://www.kindmeal.my/photos/member/17/17025-s.jpg" alt="" /></div>
        <div>
          <div><span></span><b>Ando Kit, </b><span>Feb 3rd 2016</span></div>
          <div className={styles.starImgs}>
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
          </div>
          <div className={styles.comment}><p>Actually I do not know if this deal is limited to the no. listed on the description..thus, asking n the staff said it's for all the juices..hehehe~

take no.10~ quite good..lol..</p></div>
        </div >
      </div>
      <div  className={styles.frame2img}>
        <img src="https://www.kindmeal.my/photos/moment/6/6956-6745-m.jpg" alt="" />
        <p>View Moment</p>
      </div>
    </div>

    <hr />



    <div className={styles.Frame}>
      <div  className={styles.innerFrame}>
        <div className={styles.frame1img}><img src="https://www.kindmeal.my/images/default_female-s.jpg" alt="" /></div>
        <div>
          <div><span><b>Caryn Choo,</b></span>   Apr 21st 2017<span></span></div>
          <div className={styles.starImgs}>
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
          </div>
          <div className={styles.comment}><p>Great redeeming process at paradigm mall, staffs know what's going on (which sometimes they don't). Juice is great with no added sugar and ice. If MBG fruit juice stall can 
            upgrade their juicer using slow juicer machine that will be even bigger hit!</p></div>
        </div>
      </div >
      <div  className={styles.frame2img}>
       
      </div>
    </div>

    <hr />



    <div className={styles.Frame}>
      <div  className={styles.innerFrame}>
        <div className={styles.frame1img}><img src="https://www.kindmeal.my/images/default_female-s.jpg" alt="" /></div>
        <div>
          <div><span><b>Rennie Lau,</b></span>   Aug 3rd 2017<span></span></div>
          <div className={styles.starImgs}>
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
          </div>
          <div className={styles.comment}><p>It seems like the staff weren't aware of the existence of this offer. 
            Took them awhile to figure out how to key into the system, but I receive the discount in the end.
</p></div>
         </div>
      </div>
      <div  className={styles.frame2img}>
       
      </div>
    </div>

    <hr />



    <div className={styles.Frame}>
      <div  className={styles.innerFrame}>
        <div className={styles.frame1img}><img src="https://www.kindmeal.my/images/default_female-s.jpg" alt="" /></div>
        <div>
          <div><span></span><b>Sohini Malani ,</b><span>   Feb 27th 2018</span></div>
          <div className={styles.starImgs}>
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
          </div>
          <div className={styles.comment}><p>Fresh juices & fruits t seems like the staff weren't aware of the existence of this offer. Took them awhile to figure out how to key into the system, but I receive the discount in the end. </p></div>
        </div>
      </div>
      <div  className={styles.frame2img} >
        
      </div>
    </div>

    <hr />




    <div className={styles.Frame}>
      <div  className={styles.innerFrame}>
        <div className={styles.frame1img}><img src="https://www.kindmeal.my/photos/member/17/17025-s.jpg" alt="" /></div>
        <div>
          <div><span><b>Ando Kit,</b></span><span>   Apr 12th 2018</span></div>
          <div className={styles.starImgs}>
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
          </div>
          <div className={styles.comment}><p>waiting~ maghrib azan..huhuhu~ fasting today..thus, 😍😍😍...for this juice..*sigh*.
            .quite a challenge to take it home..using motorcycle..from pj to..</p></div>
        </div>
      </div >
      <div  className={styles.frame2img}>
        <img src="https://www.kindmeal.my/photos/moment/15/15801-23712-m.jpg" alt="" />
        <p>View Moment</p>
      </div>
    </div>

    <hr />




    <div className={styles.Frame}>
      <div  className={styles.innerFrame}>
        <div className={styles.frame1img}><img src="https://www.kindmeal.my/photos/member/17/17025-s.jpg" alt="" /></div>
        <div>
          <div><span></span><b>Ando Kit,</b><span>   Feb 22nd 2019</span></div>
          <div className={styles.starImgs}>
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
            <img src="https://www.kindmeal.my/images/icon_star.png" alt="" />
          </div>
          <div className={styles.comment}><p>It s been a long time~ lol..the design change~^^Anyway~ the juices is delicious~ as expected from the fruit..hehehe..</p></div>
        </div>
      </div>
      <div  className={styles.frame2img} >
       
      </div>
    </div>

    <hr />


   



    


   <div className={styles.lastSec}>
   <div className={styles.lasthead}><h1>Submit Your Review</h1></div>
   <div><p style={{fontSize:"15px",fontWeight:"bold"}}>Yes, we'd love to hear from you! If you've had the chance to try out this deal, please share your review and rating with the food lovers. You can even include a photo to spice it up! Your review will also be published under 
     the KindMoments section at your profile and the shop's page.</p></div>
   

   <div><span style={{fontSize:"20px"}}>Rating</span> 
    <span className={styles.starImgs } id={styles.starsEdit} style={{marginLeft:"20px"}}>
      <img src="https://www.kindmeal.my/images/icon_star_grey.png" alt="" />
      <img src="https://www.kindmeal.my/images/icon_star_grey.png" alt="" />
      <img src="https://www.kindmeal.my/images/icon_star_grey.png" alt="" />
      <img src="https://www.kindmeal.my/images/icon_star_grey.png" alt="" />
      <img src="https://www.kindmeal.my/images/icon_star_grey.png" alt="" />
      
    </span>
   </div>

   <div><p style={{fontSize:"20px" , fontWeight:"bold"}}>Please <a href="">login first </a> to share your review.</p></div>
   {/* className={styles.lastInput}
  <div><input  type="text" /></div> */}
  <div><textarea name="" id="" cols="117" rows="8"></textarea></div>
  <div style={{display:"flex",gap:"40px" ,marginTop:"20px"}}>
    <div style={{fontSize:"20px" , fontWeight:"bold"}}>Photo</div>
    <div><button className={styles.lastButton2}>Select Photo</button></div>
  </div><br /> <br />
  <div  className={styles.reviewbutton}><button  >Submit Review</button></div>
  <br />
    </div>
    </div>
    

    

  </div>
    </div>
  )
}

export default Recipe