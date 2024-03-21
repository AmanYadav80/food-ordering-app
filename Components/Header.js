import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/mockData";
import { useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext  from "../utils/userContext"
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from "@auth0/auth0-react";
const Header=({userName})=>{
   // const [btnName,setBtnName]=useState('Login')
   const onlineStatus=useOnlineStatus();
   const { loginWithRedirect,logout,user, isAuthenticated, isLoading } = useAuth0();
   // const {loggedInUser}=useContext(userContext)
   const cartItems=useSelector((store)=>store.cart.items);
   // console.log("This is the cart item:",cartItems);
    return (
       <div className="header">
          <div>
            <img className="logo" src={LOGO_URL}/>
          </div>
          <div className="nav-items">
             <ul className="list-items">
                <li>Online:{onlineStatus?"✅":"❌"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                {/* <li><Link to="/grocery">Grocery</Link></li> */}
                <li className="cart-icon"><Link to="/cart">{<FontAwesomeIcon icon={faShoppingCart} />}</Link><span>{cartItems.length}</span></li>
                {/* <h3 className="user">{loggedInUser}</h3> */}
                <li>{isAuthenticated && user.name}</li>
                {
               isAuthenticated ? (
               <button className="login-btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
               ) : (
               <button className="login-btn" onClick={() => loginWithRedirect()}>Log In</button>
               )
}
               
             </ul>
          </div>
       </div>
    )
 }
export default Header;