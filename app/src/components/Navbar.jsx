import React from 'react'
import { Email, Facebook, GreenBar, GreenLinks, Logo, Nav, Signup, Social } from './Styled'
import { NavLink, Link } from 'react-router-dom'


const Navbar = () => {



    return (
        <>
            <Nav>
                <Link to="/">
                    <Logo src='https://www.kindmeal.my/images/logo-kindmeal.png' alt='LogoImg' />
                </Link>

                <div style={{ display: "flex" }}>
                   <a href="https://www.kindmeal.my/widget.htm"> <Social src='https://www.kindmeal.my/images/follow_blog_grey.png' title="Saves Lives With Your Blog - KindMeal.my Widgets"/></a>
                   <a href="https://www.facebook.com/KindMeal.my"> <Social src='https://www.kindmeal.my/images/follow_facebook_grey.png' title="Follow KindMeal.my on Facebook" /></a>
                    <a href="https://twitter.com/KindMeal"><Social src='https://www.kindmeal.my/images/follow_twitter_grey.png' title="Follow KindMeal.my on Twitter" /></a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <p style={{ fontSize: "12px" }}>Login</p>
                    <div>
                        <Facebook className='show'>Facebook</Facebook>
                        <p className='hide'>Login with Facebook Account</p>
                    </div>
                    <div>
                        <Email className='showEmail'>Email</Email>
                        <p className='hideEmail'>Login with KindMeal Account</p>
                    </div>
                    <Signup>Signup</Signup>
                </div>
            </Nav>
            <GreenBar>
                <GreenLinks>
                    <NavLink className="NavLink" to="/">Home</NavLink>
                </GreenLinks>
                <GreenLinks >
                    <NavLink className="NavLink" to="/deals">Meal Deals</NavLink>
                </GreenLinks>
                <GreenLinks >
                    <NavLink className="NavLink" to="/kindmoments">KindMoments</NavLink>
                </GreenLinks>
                <GreenLinks >
                    <NavLink className="NavLink" to="/hotpicks">HotPicks</NavLink>
                </GreenLinks>
                <GreenLinks >
                    <NavLink className="NavLink" to="/recipes">Recipes</NavLink>
                </GreenLinks>
                <GreenLinks >
                    <NavLink className="NavLink" to="/directory">Directory</NavLink>
                </GreenLinks>
                <GreenLinks >
                    <NavLink className="NavLink" to="/articles">Articles</NavLink>
                </GreenLinks>
                <GreenLinks >
                    <NavLink className="NavLink" to="/help">Help</NavLink>
                </GreenLinks>
            </GreenBar>
        </>

    )
}

export default Navbar