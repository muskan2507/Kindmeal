import React, { useState, useNavigate, useContext, useEffect } from "react";
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

const Navbar = () => {
  const [data, setdata] = useState([]);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [photo, setPhoto] = useState("");
  const { isAuth, setIsAuth } = React.useContext(AuthContext);
  const getdata = async () => {
    let res = await fetch("http://localhost:8080/formData");
    let data = await res.json();
    setdata([...data]);
    // console.log(data)
    console.log(data[0].firstName, data[0].lastNme);
    setName(data[0].firstName);
    setLastname(data[0].lastName);
    setPhoto(data[0].photo);
  };
  useEffect(() => {
    getdata();
  }, []);
  if (data.length > 0) {
    setIsAuth(true);
  }
  console.log(data, isAuth);
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
          <p style={{ marginTop: "20px", marginRight: "15px" }} onClick={()=>setIsAuth(false)}>Log Out</p>
            <p style={{ marginTop: "20px", marginRight: "15px" }}>
              {name} {lastname}
            </p>{" "}
            <img
              style={{ height: "50px", width: "50px" }}
              src={photo}
              alt={name}
            />
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <p style={{ fontSize: "12px" }}>
              <LoginPopup />
            </p>
            <div className="facebook_email">
              <Facebook className="show">Facebook</Facebook>
              <p className="hide">Login with Facebook Account</p>
            </div>
            <div className="facebook_email">
              <Email className="showEmail">Email</Email>
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