import React,{useState,useEffect} from "react";
 import axios from 'axios'

 
 
 const DataFetching = () => {
     const [Fdata,setFdata]=useState([])

     useEffect(()=>{
         axios.get('http://localhost:8080/homer1')
         .then(res=>{
             console.log(res)
             setFdata(res.data)
         })
         .catch(err=>{
             console.log(err)
         })
     },[])
   return (
     <div>
<ul>
    {Fdata.map (el=>(
        <div>
        <img src={el.img}></img>
        <p>{el.txt}</p></div>
    ))}
</ul>
    

     </div>
   )
 }
 
 export default DataFetching