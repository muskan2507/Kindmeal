import React from "react";

class Listhead extends React.Component {
  render() {
    return (
      <div className="listhead">
        <h2>Latest News & Videos</h2>
        <a
          className="save_life"
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
        <div className="listed_items">
          <div>
            <a
              href="https://www.kindmeal.my/articles/post-18137.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./IMG/listed_homepage_1_1.png" alt="pic" />
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
        <div className="listpara">
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
