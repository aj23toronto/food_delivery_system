import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin, onSearch }) => {
  const [menu, setMenu] = useState("home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { getTotalCartAmount } = useContext(StoreContext);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) onSearch(value);
  };

  return (
    <div className="navbar">
      {/* 🔸 Logo */}
      <Link to="/" onClick={() => setMenu("home")}>
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      {/* 🔸 Center Navigation */}
      <ul className="navbar-menu">
        <li>
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#app-download"
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            Mobile App
          </a>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => setMenu("contact")}
            className={menu === "contact" ? "active" : ""}
          >
            Contact Us
          </Link>
        </li>
      </ul>

      {/* 🔸 Right Section */}
      <div className="navbar-right">
        {/* Search Icon */}
        <div className={`search-container ${searchOpen ? "active" : ""}`}>
          <input
            type="text"
            placeholder="Search dishes..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <img
            src={assets.search_icon}
            alt="Search"
            className="search-icon"
            onClick={() => setSearchOpen(!searchOpen)}
          />
        </div>

        {/* Cart */}
        <div className="navbar-cart">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" className="icon" />
          </Link>
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </div>

        {/* Partner Mode Button */}
        <Link to="/delivery">
          <button className="partner-btn">🚴 Partner</button>
        </Link>

        {/* Sign In */}
        <button onClick={() => setShowLogin(true)} className="signin-btn">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
