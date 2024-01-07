import React, { useState } from "react";
import { navbarData } from "./NavbarData";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

//onClick={window.location.pathname = val.link}

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <div className="topbar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} />
          </Link>
          <div className="searchInputs">
            <div className="searchIcon">
              <IoMdSearch/>
            </div>
            <input
              type="text"
              placeholder="Search"
              size="32"
              className="textbox"
            />
          </div>

          <div className="rightpart">
            <div className="heart-icon-container">
              <FaHeart className="heart-icon"/>
              <h3 className="wishlist-heading">Wishlist</h3>
            </div>
            <div className="cart-icon-container">
              <FaShoppingCart className="cart-icon"/>
              <h3 className="cart-heading">Cart</h3>
            </div>
            <div className="avatar-icon-container">
              <IoPersonSharp className="avatar-icon"/>
              <h3 className="avatar-heading">Profile</h3>
            </div>
          </div>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <ImCross style={{ color: "#e3e2df", fontSize: "18px" }} />
            </Link>
          </li>
          {navbarData.map((item, index) => {
            return (
              <li key={index} className={item.cname}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
