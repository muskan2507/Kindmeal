import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import style from "../Styles/Home.module.css"
const ListHead1 = () => {
    const navigate=useNavigate()
    const [data,setData]=useState([])
    useEffect(() => {
        const getData = async () => {
    
          try {
            let res = await fetch(`http://localhost:8080/recipeData?_limit=5`)
            let data = await res.json();
            setData(data)
            // console.log(data)
          }
          catch (error) {
            console.log(error);
          }
        }
        getData();
        // console.log(data)
      },[])
  return (
    <div className={style.box}>
        <div style={{display:"flex" , justifyContent:"space-between"}}>
            <p style={{fontSize:"20px"}}>Yummylicious Moments</p>
            <p style={{fontSize:"17px"}}>
                <a href="" onClick={()=>navigate("/recipes")}>Secret Recipies</a>   |   
                <a href="" onClick={()=>navigate("/hotpicks")} >Member Hot Picks</a>  |   
                <a href="" onClick={()=>navigate("/moments")}>Photo Moments</a>
            </p>
        </div>
        <br/>
        <div style={{display:"flex" , justifyContent:"space-between"}}>
            {data.map(e=>{
                return (
                    <div style={{width:"170px",textAlign:"center"}} key={e.id}>
                        <img src={e.img}/>
                        <p style={{textAlign:"center",fontSize:"12px"}}>{e.title}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ListHead1