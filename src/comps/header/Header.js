import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  const navItem = [
    {
      link_name: "Home",
      link_path: "/",
    },
    {
      link_name: "About",
      link_path: "/",
    },
    {
      link_name: "Services",
      link_path: "/",
    },
    {
      link_name: "Our Products",
      link_path: "/",
    },
  ];
  return (
    <>
      <div class="header-parent parent">
    
      <div class="header_left"></div>
        <div class="header-right">
          <div class="top_section"></div>
          <div class="bottom_section">
            <div class="navs">
              {navItem.map((item, index) => (
                <Link key={index} to={item.link_path} >
                {item.link_name}
                </Link>
              ))}

              <div class="btn">
                <div class="inner_text">
            Contact us
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </>
  );
};

export default Header;
