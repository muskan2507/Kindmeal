import React, { useEffect, useState,useMemo } from 'react'
import style from './recipe.module.css'



const Recipe = () => {
const [show, setShow]=useState([])
const [selectedCategory, setSelectedCategory] = useState();
const [count, setCount] =useState(1)




  useEffect(()=>{
    fetch(`http://localhost:8080/recipeData?_page=${count}&_limit=12`).then((res)=>res.json())
    .then((data)=>setShow(data))
    .catch((er)=>console.log(er))
  },[count])

  const handleSearch = (e) => {
    if (e.target.value === '') {
      fetch(`http://localhost:8080/recipeData?_page=${count}&_limit=9`)
      .then((res) => res.json())
        .then((data) => setShow(data))
        .catch((er) => console.log(er))
    } else {
      const newShow = show.filter((item) => item.title.includes(e.target.value))
      setShow([...newShow])
    }
  }

  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return show;
    }
    return show.filter((item) => item.catagory === selectedCategory);
  }
  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [selectedCategory, show]);

  function handleCategoryChange(event) {
    if(event.target.value==="All Categories"){
      return selectedCategory;
    }else{

      setSelectedCategory(event.target.value);
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
          <input type="text" placeholder='Search Recipe or User Name' className={style.input_box} onChange={handleSearch} />
          <select id="select" className='input-box'
           onChange={handleCategoryChange} name="category-list">
            <option value="All Categories">All Categories</option>
            <option value="Appetizers">Appetizers</option>
            <option value="Beverages">Beverages</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Breads">Breads</option>
            <option value="Condiments">Condiments</option>
            <option value="Desserts">Desserts</option>
            <option value="Snacks">Snacks</option>
            <option value="Main Dishes">Main Dishes</option>
            <option value="Side Dishes">Side Dishes</option>
            <option value="Salads">Salads</option>
          </select>

          <button>Search Recipes</button>
          <button className='addShop'>Share my Recipe</button>
        </div>
      </div>

      <div className={style.button_div}>
          <button  onClick={handleCategoryChange} >All Category</button>
          <button  onClick={handleCategoryChange}>Appetizers</button>
          <button  onClick={handleCategoryChange} >Beverages</button>
          <button onClick={handleCategoryChange}>Breakfast</button>
          <button onClick={handleCategoryChange}>Breads</button>
          <button onClick={handleCategoryChange}>Condiments</button>
          <button onClick={handleCategoryChange}>Desserts</button>
          <button onClick={handleCategoryChange}>Snacks</button>
          <button onClick={handleCategoryChange}>Main Dishes</button>
          <button onClick={handleCategoryChange}>Salads</button>
          <button onClick={handleCategoryChange}>Side Dishes</button>
          <button>Soup</button>
        </div>
        <div className={style.pagination}>
          <div>
          <p>Page : </p>
          <p onClick={()=>setCount(1)}>1</p>
          <p onClick={()=>setCount(2)}>2</p>
          <p onClick={()=>setCount(3)}>3</p>
          <p onClick={()=>setCount(4) }>4</p>
          <p onClick={()=>setCount(5)}>5</p>
          <p onClick={()=>setCount(6)}>6</p>
          <p onClick={()=>setCount(7)}>7</p>
          <p onClick={()=>setCount(8)}>8</p>
          <p onClick={()=>setCount(9)}>9</p>
          </div>
     <button  onClick={()=>setCount(count+1)} >Next &raquo; </button>
        </div>
<div className={style.grid_div}>

     {
     filteredList.map((item)=>(
       <div className={style.map_div} key={item.id}>
<div className={style.head_logo_div}>
  <div>
  <img src={item.logo} alt="logo" className={style.logo}/>
  <p className={style.author}>{item.author}</p>
  </div>
  <button className={style.view_btn}>View</button>
</div>


<img src={item.img} alt="images" />
<h5 className={style.title}>{item.title}</h5>

<div className={style.time_like_div}>
  <p> <img src="https://www.kindmeal.my/images/icon_time_small.png" alt="time" className={style.ti_li_co}/>
    {item.time}</p>

  <p ><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="like"className={style.ti_li_co}/>
    {item.Like}</p>
  <p><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="comment" className={style.ti_li_co}/>
    {item.Comment}</p>
</div>
  
  
  
</div>
        
     ))
   }
</div>
    </div>
  )
}

export default Recipe