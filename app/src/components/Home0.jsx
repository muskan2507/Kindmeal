import React from "react";
import style from "../Styles/Home.module.css"
class Listhead extends React.Component {
  render() {
    return (
      <div className={style.listhead}>
        <h2>Latest News & Videos</h2>
        <a
          className={style.save_life}
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          . Save lives with your blog
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          . News & Articles
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          . Follow our Facebook
        </a>
        <div className={style.listed_items}>
          <div>
            <a
              href="https://www.kindmeal.my/articles/post-18137.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://scontent-xsp1-3.xx.fbcdn.net/v/t15.5256-10/265676754_537504067934425_3867740012497271746_n.jpg?stp=dst-jpg_s720x720&_nc_cat=107&ccb=1-5&_nc_sid=ad6a45&_nc_ohc=y30XQLoGpfwAX8XM2p9&_nc_ht=scontent-xsp1-3.xx&edm=ALdPpPkEAAAA&oh=00_AT9Q7CEUHCoHluV0lZrhyJWjkUsM9DnImsqxqHCyIdDZWQ&oe=6277A935" />
            </a>
          </div>
          <div>
            <a
              href="https://www.kindmeal.my/articles/post-18136.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./IMG/listed_homepage_1_2.png" alt />
            </a>
          </div>
          <div>
            <a
              href="https://www.kindmeal.my/articles/post-18133.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./IMG/listed_homepage_1_3.png" alt />
            </a>
          </div>
          <div>
            <a
              href="https://www.kindmeal.my/articles/post-18128.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./IMG/listed_homepage_1_4.png" alt />
            </a>
          </div>
          <div>
            <a
              href="https://www.kindmeal.my/articles/post-18127.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./IMG/listed_homepage_1_5.png" alt />
            </a>
          </div>
        </div>
        <div className={style.listpara}>
          <div>
            <a
              href="https://www.kindmeal.my/articles/post-18137.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Food Waste: Amount Thrown Away Totals 900 Million Tonnes
            </a>{" "}
          </div>
          <div>
            <a
              href="https://www.kindmeal.my/articles/post-18136.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Feast On Authentic Haleem, Biryanies, Bbq, Indian Breads And..
            </a>{" "}
          </div>
          <div>
            <a
              href="https://www.kindmeal.my/articles/post-18133.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enjoy Wholesome Home-cooked Meals At Greenleaf Hut , Puchong..
            </a>{" "}
          </div>
          <div>
            <a
              href="https://www.kindmeal.my/articles/post-18128.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maple The Beaver Goes Branch Hunting
            </a>{" "}
          </div>
          <div>
            <a
              href="https://www.kindmeal.my/articles/post-18127.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Treat Yourself To Tasty, Nutritious Meals At Green Talk Heal..
            </a>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Listhead;