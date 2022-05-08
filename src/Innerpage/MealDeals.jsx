import styles from "./MealDeals.module.css"
export const MealDeals=()=>{
  return(
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
  )
}

export const SpecialBannerImg=()=>{
return(
  <div className={styles.SpecialBannerImg}><img src="https://www.kindmeal.my/images/ads/banner_janegoodall_message.jpg" alt="" /></div>
)
}