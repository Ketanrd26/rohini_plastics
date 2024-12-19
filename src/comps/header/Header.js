import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assests/rohini_plastics_logo.png";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";




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
        <div class="header_left">
          <div class="logo">
            <img src={logo} alt="" />
            <h1>
              Rohini <br /> Plastics
            </h1>
          </div>

          <div class="contact_info">
            <div class="location">
              <div class="icon">
              <MdOutlineAlternateEmail />
              </div>
              <div class="content">
                <h4>Mail Us</h4>
                <p>
                rohiniplastic1@gmail.com 
                </p>
              </div>
            </div>
            <div class="location">
              <div class="icon">
              <IoCall />
              </div>
              <div class="content">
                <h4>Contact Us</h4>
                <p>
                +919850176707
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="header-right">
          <div class="top_section"></div>
          <div class="bottom_section">
            <div class="navs">
              {navItem.map((item, index) => (
                <Link key={index} to={item.link_path}>
                  {item.link_name}
                </Link>
              ))}

              <div class="btn">
                <div class="inner_text">Contact us</div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="mobile_header parent">
        <div class="left">
        <div class="logo">
            <img src={logo} alt="" />
            <h1>
              Rohini <br /> Plastics
            </h1>
          </div>

        </div>
        <div class="right">
        <div class="location">
              <div class="icon">
              <IoCall />
              </div>
              <div class="content">
                <h4>Contact Us</h4>
                <p>
                +919850176707
                </p>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;
