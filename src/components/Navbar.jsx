import React, { useState,  useContext, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import {
  Email,
  Facebook,
  GreenBar,
  GreenLinks,
  Logo,
  Nav,
  Signup,
  Social,
} from "./Styled";
import { NavLink, Link } from "react-router-dom";
import LoginPopup from "../PopUp/LoginPopUp";
import SignupPopup from "../PopUp/SignUpPopUp";
import { AuthContext } from "../Context/AuthContext";
import App1 from "../Pages/DropDown";


const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0px auto;
  background:black;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")`
 margin-top:130px;
`;

const DropDownList = styled("ul")`
  padding: 0;
  ${'' /* margin-top:30px; */}
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const Navbar = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [photo, setPhoto] = useState("");
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const navigate = useNavigate()

  const getdata = () => {
    let data = JSON.parse(localStorage.getItem("RegisteredData")) || [];
    // setdata([...data])
    // console.log(data[0].firstName, data[0].lastNme);
    //
    if (data.length > 0) {
      setIsAuth(true);
      setName(data[0].firstName);
      setLastname(data[0].lastName);
      setPhoto(data[0].photo);
    }
    // console.log(data)
    // console.log(data, isAuth);
  };
  useEffect(() => {
    getdata();
  }, []);
  const handleLogOut = () => {
    // navigate("/logout")
    setIsAuth(false);
  };
  //
  //   console.log(data[0].firstName,data[0].lastNme)

  return (
    <>
      <Nav>
        <Link to="/">
          <Logo
            src="https://www.kindmeal.my/images/logo-kindmeal.png"
            alt="LogoImg"
          />
        </Link>

        <div style={{ display: "flex" }}>
          <a href="https://www.kindmeal.my/widget.htm">
            {" "}
            <Social
              src="https://www.kindmeal.my/images/follow_blog_grey.png"
              title="Saves Lives With Your Blog - KindMeal.my Widgets"
            />
          </a>
          <a href="https://www.facebook.com/KindMeal.my">
            {" "}
            <Social
              src="https://www.kindmeal.my/images/follow_facebook_grey.png"
              title="Follow KindMeal.my on Facebook"
            />
          </a>
          <a href="https://twitter.com/KindMeal">
            <Social
              src="https://www.kindmeal.my/images/follow_twitter_grey.png"
              title="Follow KindMeal.my on Twitter"
            />
          </a>
        </div>
        {isAuth ? (
          <div style={{ display: "flex" }}>
           
         <div>   <p style={{ marginTop: "0px", marginRight: "15px",color:"black" }}>
              {name} {lastname}
            </p></div>
            <div style={{marginTop:"100px",marginLeft:"200px"}}> <App1/></div>
           
        
            <nav className="nav">
        <ul className="nav__menu">
        
          <li
            className="nav__menu-item"
          >
             <p style={{ marginTop: "10px", marginRight: "15px",color:"black" }}>
              {name} {lastname}
            </p> 
            <Submenu />
          </li>
  
        </ul>
      </nav>


          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <p style={{ fontSize: "12px" }}>
              <LoginPopup />
            </p>
            <div className="facebook_email">
              <Facebook className="show" style={{backgroundColor: "#35619f"}}>Facebook</Facebook>
              <p className="hide">Login with Facebook Account</p>
            </div>
            <div className="facebook_email">
              <Email className="showEmail" style={{background:"#666666"}}>Email</Email>
              <p className="hideEmail">Login with KindMeal Account</p>
            </div>
            <Signup>
              <SignupPopup />
            </Signup>
          </div>
        )}
      </Nav>
      <GreenBar>
        <GreenLinks>
          <NavLink
            className="NavLink"
            to="/"
            style={{ textDecoration: "none" }}
          >
            Home
          </NavLink>
        </GreenLinks>
        <GreenLinks>
          <NavLink
            className="NavLink"
            to="/deals"
            style={{ textDecoration: "none" }}
          >
            Meal Deals
          </NavLink>
        </GreenLinks>
        <GreenLinks>
          <NavLink
            className="NavLink"
            to="/kindmoments"
            style={{ textDecoration: "none" }}
          >
            KindMoments
          </NavLink>
        </GreenLinks>
        <GreenLinks>
          <NavLink
            className="NavLink"
            to="/hotpicks"
            style={{ textDecoration: "none" }}
          >
            HotPicks
          </NavLink>
        </GreenLinks>
        <GreenLinks>
          <NavLink
            className="NavLink"
            to="/recipes"
            style={{ textDecoration: "none" }}
          >
            Recipes
          </NavLink>
        </GreenLinks>
        <GreenLinks>
          <NavLink
            className="NavLink"
            to="/directory"
            style={{ textDecoration: "none" }}
          >
            Directory
          </NavLink>
        </GreenLinks>
        <GreenLinks>
          <NavLink
            className="NavLink"
            to="/articles"
            style={{ textDecoration: "none" }}
          >
            Articles
          </NavLink>
        </GreenLinks>
        <GreenLinks>
          <NavLink
            className="NavLink"
            to="/help"
            style={{ textDecoration: "none" }}
          >
            Help
          </NavLink>
        </GreenLinks>
      </GreenBar>
    </>
  );
};

export default Navbar;



class Submenu extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a>Our Company</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Our Team</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Our Portfolio</a>
        </li>
      </ul>
    )
  }
}
