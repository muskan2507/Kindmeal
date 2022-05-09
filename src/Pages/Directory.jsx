import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Directory.css";
const Directory = () => {
  const [show, setShow] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:8080/directory?_page=${page}&_limit=6`)
      .then((res) => res.json())
      .then((data) => setShow(data))
      .catch((err) => console.log(err));
  }, [page]);

  const shopSearch = (e) => {
    if (e.target.value === "") {
      fetch("http://localhost:8080/directory")
        .then((res) => res.json())
        .then((data) => setShow(data))
        .catch((er) => console.log(er));
    } else {
      const newShow = show.filter((item) => item.name.includes(e.target.value));
      setShow([...newShow]);
    }
  };

  const vegeterianSort = (show) => {
    show.sort((a, b) => {
      return a.name - b.name;
    });
  };
  console.log(show);
  return (
    <div>
      <div className="ynews">
        <div id="mar">
          <h5>Vegetarian Restaurants In Malaysia</h5>
          <br/>
          <p id="mar1">
            Looking for even more delicious choices? Explore hundreds of
            vegetarian and vegan restaurants in Malaysia.
          </p>
            <br/>
          <p id="mar1">
            Are you a restaurant or cafe owner? Boost your business with an
            attractive KindMeal profile and deals for FREE.
            <a href="https://www.kindmeal.my/businesses.htm"> Find out more</a> or{" "}
            <a href="https://www.kindmeal.my/contact.htm">contact us</a> more.
          </p>
        </div>
        <div className="flex-div flex">
          <input
            type="text"
            placeholder="Search Shop Name"
            className="input-box"
            onChange={shopSearch}
          />
          <select name="search-by-select" id="select" className="input-box">
            <option value="all Shops In Malasiyas">
              All Shops In Malaysia
            </option>
            <option value="Selangore">Selangore</option>
            <option value="Kuala Lumpur">Kuala Lumpur</option>
            <option value="Johor">Johor</option>
            <option value="Kedah">Kedah</option>
            <option value="Melaka">Melaka</option>
            <option value="Pehang">Pehang</option>
          </select>

          <button>Search Shop</button>
          <Link to="/directory/addshop" className="addShop" style={{textDecoration:"none"}}>
            Add a Shop
          </Link>
        </div>
      </div>

      <div className="flex-div2 flex">
        <button onClick={vegeterianSort}>Vegeterian Directory</button>
        <button>Featured Resturents</button>
        <button>Food Menu</button>
        <button>Food Map</button>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className=" ">
            <a className="page-link border-0" href="#">
              Page:{" "}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link  border-0" href="#" onClick={()=>setPage(1)}>
              1
            </a>
          </li> 
          <li className="page-item">
            <a className="page-link border-0" href="#" onClick={()=>setPage(2)}>
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link border-0" href="#" onClick={()=>setPage(3)}>
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link border-0" href="#" onClick={()=>setPage(4)}>
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link border-0" href="#" onClick={()=>setPage(5)}>
              5
            </a>
          </li>
          <li className="page-item">
            <a className="page-link border-0" href="#" onClick={()=>setPage(6)}>
              6
            </a>
          </li>
          
          <li className=" next">
           
            
              <button onClick={()=>setPage(page+1)}>Next » </button>
            
          </li>
        </ul>
      </nav>
         <br/><br/>
      <div className="map-div">
        {show.map((item, index) => {
          return (
            <div key={item.id} className="child-div">
              <h3>{item.name}</h3>
              <br/>
              <p>{item.description}</p>
              <br/>
              <hr />
              <br/> <br/>
              <h4 className="address-1">Address</h4>
              <p>{item.address}</p>
              <br />

              <h4 className="phone-1">Phone</h4>
              <p>{item.phone}</p>
              <br />
              <h4 className="openHoue-1">Opening Hours</h4>
              <p>{item.opening}</p>
               <br/>
              {/* <iframe className="gmap_iframe" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src={item.map}></iframe> */}

              <iframe
                className="gmap_iframe"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=900&amp;height=800&amp;hl=en&amp;q=1, Jalan 4/93, Taman Miharja, Jalan Cheras, 55200 Kuala Lumpur, Wilayah Persekutuan&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>

              <div className="flex bottom-line">
                <h4>Visit Website</h4>
                <p className="border border-primary"></p>
                <h4>Get Directions</h4>
                <p className="border border-primary"></p>
                <h4>Nearby Shops</h4>
              </div>
            </div>
          );
        })}

        {/* <iframe className="gmap_iframe" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=900&amp;height=800&amp;hl=en&amp;q=1, Jalan 4/93, Taman Miharja, Jalan Cheras, 55200 Kuala Lumpur, Wilayah Persekutuan&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
    </iframe> */}
      </div>

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className=" ">
            <a className="page-link border-0" href="#">
              Page:{" "}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link  border-0" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link border-0" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link border-0" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link border-0" href="#">
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link border-0" href="#">
              5
            </a>
          </li>
          <li className="page-item">
            <a className="page-link border-0" href="#">
              6
            </a>
          </li>
         
          <li className=" next">
           
            
          <button onClick={()=>setPage(page+1)}>Next » </button>

          </li>
        </ul>
      </nav>
      <br/><br/>
    </div>
  );
};

export default Directory;