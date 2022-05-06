import React from 'react'
import { Email, Facebook, GreenBar, GreenLinks, Logo, Nav, Signup, Social } from './Styled'
import { NavLink, Link } from 'react-router-dom'
import SignupPopup from '../signupPopup/SignupPopup'
import LoginPopup from '../signupPopup/LoginPopup'


const Navbar = () => {



    return (
        <>
            <Nav>
                <Link to="/">
                    <Logo src='https://www.kindmeal.my/images/logo-kindmeal.png' alt='LogoImg' />
                </Link>

                <div style={{ display: "flex" }}>
                    <Social src='https://www.kindmeal.my/images/follow_blog_grey.png' />
                    <Social src='https://www.kindmeal.my/images/follow_facebook_grey.png' />
                    <Social src='https://www.kindmeal.my/images/follow_twitter_grey.png' />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <NavLink to='/loginwindow' style={{ fontSize: "12px" }}>
                        <LoginPopup/>
                        
                        </NavLink>
                    <div className='facebook_email'>
                        <Facebook className='show'>Facebook</Facebook>
                        <p className='hide'>Login with Facebook Account</p>
                    </div>
                    <div  className='facebook_email'>
                        <Email className='showEmail'>Email</Email>
                        <p className='hideEmail'>Login with KindMeal Account</p>
                    </div>
                    <Signup>
                    <SignupPopup/>
                  
                    </Signup>
                </div>
            </Nav>
            <GreenBar>
                <GreenLinks>
                    <NavLink className="NavLink" to="/">Home</NavLink>
                </GreenLinks>
                <GreenLinks >
                    <NavLink className="NavLink" to="/mealdeals">Meal Deals</NavLink>
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