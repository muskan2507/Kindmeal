import styles from './Banner.module.css'
export const Banner=()=>{
  return(
    <div>
      <div><img className={styles.BannerImg} src="https://www.kindmeal.my/photos/shop/2/244-c.jpg" alt="" />
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
    </div>
  )
}