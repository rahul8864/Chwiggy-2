import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const Title = () => {
  

  return (
    <>
      <a href="/">
        <h1 className="logo">chwiggy</h1>
      </a>
    </>
  );
};

const Header = () => {
  const token = localStorage.getItem("token");
  const [isLoggedin, setIsLoggedin] = useState(token?.length === 100);
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);

  const [menuOpen, setMenuOpen] = useState(false); // State for menu tray visibility

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <Title />
      <div className={`nav-items ${menuOpen ? "open" : ""}`}>
        <div className="hamburger-menu" onClick={handleMenuToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="cart--nav">
            <Link to="/cart">Cart {cartItems.length!=0&&<span className="cart-number">{cartItems.length}</span>}</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
      <div className="cart-mobile"><Link to="/cart">{cartItems.length!=0&&<span className="cart-number">{cartItems.length}</span>}</Link></div>
      <div className="logbox">
        {isLoggedin ? (
          <button
            className="logout-btn"
            onClick={() => {
              localStorage.clear();
              setIsLoggedin(!isLoggedin);
            }}
          >
            Logout
          </button>
        ) : (
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
