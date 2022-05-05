import React, { useEffect, useState } from 'react'
import style from './recipe.module.css'
const Recipe = () => {
const [show, setShow]=useState([])
  useEffect(()=>{
    fetch(" http://localhost:8080/recipeData").then((res)=>res.json())
    .then((data)=>setShow(data))
    .catch((er)=>console.log(er))
  },[])




  
  const shopSearch = (e) => {
    if (e.target.value === '') {
      fetch('http://localhost:8080/recipeData').then((res) => res.json())
        .then((data) => setShow(data))
        .catch((er) => console.log(er))
    } else {
      const newShow = show.filter((item) => item.name.includes(e.target.value))
      setShow([...newShow])
    }
  }


  console.log(show);
  return (
    <div className={style.recipe_main}>
  
          <div className={style.ynews}>
        <div className={style.mar}>
          <h2 >Food & Drinks <span className={style.heading_span}> | Yummy Meat-Free Recipes</span>
          </h2>

          <p>Want to craft your own creative meat-free meals? Get inspiration from other food lovers, or share your own masterpieces!</p>

          <p>Transform into a master chef now.</p>
        </div>
        <div className={style.flex}>
          <input type="text" placeholder='Search Recipe or User Name' className={style.input_box} onChange={shopSearch} />
          <select name="search-by-select" id="select" className='input-box'>
            <option value="all Shops In Malasiyas">All Categories</option>
            <option value="Selangore">Appetizers</option>
            <option value="Kuala Lumpur">Beverages</option>
            <option value="Johor">Breakfast</option>
            <option value="Kedah">Breads</option>
            <option value="Melaka">Condiments</option>
            <option value="Pehang">Desserts</option>
            <option value="Pehang">Snacks</option>
            <option value="Pehang">Main Dishes</option>
            <option value="Pehang">Side Dishes</option>
            <option value="Pehang">Salads</option>
          </select>

          <button>Search Recipes</button>
          <button className='addShop'>Share my Recipe</button>
        </div>
      </div>

      <div className={style.button_div}>
          <button>All Category</button>
          <button>Appetizers</button>
          <button>Beverages</button>
          <button>Breakfast</button>
          <button>Breads</button>
          <button>Condiments</button>
          <button>Desserts</button>
          <button>Snacks</button>
          <button>Main Dishes</button>
          <button>Salads</button>
          <button>Side Dishes</button>
          <button>Soup</button>
        </div>
        <div className={style.pagination}>
          <div>
          <p>Page : </p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          </div>
     <button>Next  </button>
        </div>
<div className={style.grid_div}>

     {
     show.map((item)=>(
       <div className={style.map_div}>
<div>
  <img src={item.logo} alt="logo" className={style.logo}/>
  <button className={style.view_btn}>View</button>
</div>


<img src={item.img} alt="images" />

  
  
  
</div>
        
     ))
   }
</div>
    </div>
  )
}

export default Recipe