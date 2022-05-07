// import React,{useState,useEffect} from "react";
 import axios from 'axios'
 import { useEffect } from 'react'
 import { useState } from 'react'
 import Button from './button'


 
 
 const HotpicFetching = () => {
     const [fdata,setFdata]=useState([])
    const[f2data,setF2data]=useState([])
    const[f3data,setF3data]=useState([])
    const [f4data,setF4data]=useState([])
    const [f5data,setF5data]=useState([])
    const [f6data,setF6data]=useState([])
    const [f7data,setF7data]=useState([])
    const [f8data,setF8data]=useState([])
    const [f9data,setF9data]=useState([])
    const [f10data,setF10data]=useState([])
     useEffect(()=>{
         axios
         .get('http://localhost:8080/data')
         .then(res=>{
             console.log(res.data,"res")
             setFdata(res.data[0].div1)
             setF2data(res.data[0].div2)
             setF3data(res.data[0].div3)
             setF4data(res.data[0].div4)
             setF5data(res.data[0].div5)
             setF6data(res.data[0].div6)
             setF7data(res.data[0].div7)
             setF8data(res.data[0].div8)
             setF9data(res.data[0].div9)
             setF10data(res.data[0].div10)
         })
         .catch(err=>{
             console.log(err)
         })
     },[])
   return (
     <div>
       <div className="fstdiv">
         <div className="infstdiv>">
           {" "}
           <div>
             <h1>All Categories</h1>
           </div>
           <div>
             {" "}
             <p> | Hot Picks</p>
           </div>
         </div>
        <div className='ptag'>
         <p>
           Discover our food lover community's top picks. Easily locate tasty
           meat-free bargain deals, and get creative ideas for your gastronomic
           indulgence!</p>

          <p> Click into a featured deal to instantly obtain free coupons, or read
           more on our members' delicious recommendations.
         </p>

         </div>
       </div>
       <div className="buttonhere">
         <Button>All Categories</Button>
         <Button >Pasta</Button>
         <Button >Burger</Button>
         <Button >Breakfast</Button>
         <Button >Salad</Button>
         <Button >Bakery</Button>
         <Button >Tea & Dessert</Button>
         <Button >Local Delights</Button>
         <Button >Jap & Korean</Button>
         <Button >Chinese</Button>
         <Button >Indian</Button>
         <Button >Soup</Button>
         <Button >Cute</Button>
         <Button >DIY</Button>
       </div>

       <div className="mcd">
         <div className="wrapper1">
           <div className="div1">
             <div className="divdiv">
               <div className="head1">
                 {" "}
                 <p>Pasta Fiesta</p>{" "}
               </div>
               <div className="cardflex0">
                 <p>
                   <a href="">view pasta Deals .</a>
                 </p>
                 <p>
                   <a href="">View All Pasta Hot Picks</a>
                 </p>
               </div>
             </div>
             <div className="div1flexit">
               {fdata.map((el) => (
                 <div>
                   {" "}
                   <img id="divimg" src={el.img} alt=""></img>
                   <p>{el.txt}</p>
                 </div>
               ))}
             </div>
           </div>
           <hr></hr>

           <div className="div2grid">
             {f2data.map((el) => (
               <div className="cardflex">
                 <div className="imgdiv">
                   <img className="ima" src={el.img} alt=""></img>
                 </div>
                 <div className="txtdiv">
                   <div className="logodivflex">
                     <img src={el.logo} className="logo" alt="" />
                     <p>{el.txt1}</p>
                   </div>
                   <p>{el.txt2}</p>
                   <a href="">
                     <p>{el.txt}</p>
                   </a>
                 </div>
               </div>
             ))}
           </div>
           <div className="lstdiv">
             <a href="">View All Pasta Fiesta Hot Picks »</a>
           </div>
         </div>
         {/* <br></br> */}
         {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}

         <div className="wrapper1">
           <div className="div1">
             <div className="divdiv">
               <div className="head1">
                 {" "}
                 <p>Burger Bash</p>{" "}
               </div>
               <div className="cardflex0">
                 <p>
                   <a href="">view Burger Deals .</a>
                 </p>
                 <p>
                   <a href="">View All Burger Hot Picks</a>
                 </p>
               </div>
             </div>
             <div className="div1flexit">
               {f3data.map((el) => (
                 <div>
                   {" "}
                   <img id="divimg" src={el.img} alt=""></img>
                   <p>{el.txt}</p>
                 </div>
               ))}
             </div>
           </div>
           <hr></hr>

           <div className="div2grid">
             {f4data.map((el) => (
               <div className="cardflex">
                 <div id="imgdiv">
                   <img className="ima" src={el.img} alt=""></img>
                 </div>
                 <div className="txtdiv">
                   <div className="logodivflex">
                     <img src={el.logo} className="logo" alt="" />
                     <p>{el.txt1}</p>
                   </div>
                   <p>{el.txt2}</p>
                   <a href="">
                     <p>{el.txt}</p>
                   </a>
                 </div>
               </div>
             ))}
           </div>
           <div className="lstdiv">
             <a href="">View All Burger Hot Picks »</a>
           </div>
         </div>
         {/* ///////////////////////////////////////////////////////////////// */}

         <div className="wrapper1">
           <div className="div1">
             <div className="divdiv">
               <div className="head1">
                 {" "}
                 <p>Breakfast & Brunch</p>{" "}
               </div>
               <div className="cardflex0">
                 <p>
                   <a href="">view Breakfast Deals .</a>
                 </p>
                 <p>
                   <a href="">View All Breakfast Hot Picks</a>
                 </p>
               </div>
             </div>
             <div className="div1flexit">
               {f5data.map((el) => (
                 <div>
                   {" "}
                   <img id="divimg" src={el.img} alt=""></img>
                   <p>{el.txt}</p>
                 </div>
               ))}
             </div>
           </div>
           <hr></hr>

           <div className="div2grid">
             {f6data.map((el) => (
               <div className="cardflex">
                 <div className="imgdiv">
                   <img className="ima" src={el.img} alt=""></img>
                 </div>
                 <div className="txtdiv">
                   <div className="logodivflex">
                     <img src={el.logo} className="logo" alt="" />
                     <p>{el.txt1}</p>
                   </div>
                   <p>{el.txt2}</p>
                   <a href="">
                     <p>{el.txt}</p>
                   </a>
                 </div>
               </div>
             ))}
           </div>
           <div className="lstdiv">
             <a href="">View All Breakfast Hot Picks »</a>
           </div>
         </div>
         {/* //////////////////////////////////////////////////////////////// */}

         <div className="wrapper1">
           <div className="div1">
             <div className="divdiv">
               <div className="head1">
                 {" "}
                 <p>Healthy Salad</p>{" "}
               </div>
               <div className="cardflex0">
                 <p>
                   <a href="">view Salad Deals .</a>
                 </p>
                 <p>
                   <a href="">View All Salad Hot Picks</a>
                 </p>
               </div>
             </div>
             <div className="div1flexit">
               {f7data.map((el) => (
                 <div>
                   {" "}
                   <img id="divimg" src={el.img} alt=""></img>
                   <p>{el.txt}</p>
                 </div>
               ))}
             </div>
           </div>
           <hr></hr>

           <div className="div2grid">
             {f8data.map((el) => (
               <div className="cardflex">
                 <div className="imgdiv">
                   <img className="ima" src={el.img} alt=""></img>
                 </div>
                 <div className="txtdiv">
                   <div className="logodivflex">
                     <img src={el.logo} className="logo" alt="" />
                     <p>{el.txt1}</p>
                   </div>
                   <p>{el.txt2}</p>
                   <a href="">
                     <p>{el.txt}</p>
                   </a>
                 </div>
               </div>
             ))}
           </div>
           <div className="lstdiv">
             <a href="">View All Salad Hot Picks »</a>
           </div>
         </div>
         {/* ///////////////////////////////////////////////////////////////////////////////// */}

         <div className="wrapper1">
           <div className="div1">
             <div className="divdiv">
               <div className="head1">
                 {" "}
                 <p>Pizza Bread & Bakery</p>{" "}
               </div>
               <div className="cardflex0">
                 <p>
                   <a href="">view Bakery Deals .</a>
                 </p>
                 <p>
                   <a href="">View All Bakery Hot Picks</a>
                 </p>
               </div>
             </div>
             <div className="div1flexit">
               {f9data.map((el) => (
                 <div>
                   {" "}
                   <img id="divimg" src={el.img} alt=""></img>
                   <p>{el.txt}</p>
                 </div>
               ))}
             </div>
           </div>
           <hr></hr>

           <div className="div2grid">
             {f10data.map((el) => (
               <div className="cardflex">
                 <div className="imgdiv">
                   <img className="ima" src={el.img} alt=""></img>
                 </div>
                 <div className="txtdiv">
                   <div className="logodivflex">
                     <img src={el.logo} className="logo" alt="" />
                     <p>{el.txt1}</p>
                   </div>
                   <p>{el.txt2}</p>
                   <a href="">
                     <p>{el.txt}</p>
                   </a>
                 </div>
               </div>
             ))}
           </div>
           <div className="lstdiv">
             <a href="">View All Bakery Hot Picks »</a>
           </div>
         </div>
       </div>
     </div>
   );
 }
 
 export default HotpicFetching