import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assests/rohini_plastics_logo.png";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
const Header = () => {
  const navItem = [
    {
      link_name: "Home",
      link_path: "/",
    },
    {
      link_name: "About",
      link_path: "/about",
    },
    {
      link_name: "Services",
      link_path: "/services",
    },
    {
      link_name: "Our Products",
      link_path: "/products",
    },
  ];

  const [mobNav, setMobNav] = useState(false);

  return (
    <>
      <div class="header-parent parent">
        <div class="header_left">
          <Link to="/" class="logo">
            <img src={logo} alt="" />
            <h1>
              Rohini <br /> Plastics
            </h1>
          </Link>

          <div class="contact_info">
            <a
              class="location"
              target="blank"
              href="mailto:rohiniplastic1@gmail.com"
            >
              <div class="icon">
                <MdOutlineAlternateEmail />
              </div>
              <div class="content">
                <h4>Mail Us</h4>
                <p>rohiniplastic1@gmail.com</p>
              </div>
            </a>
            <a class="location" target="blank" href="tel:+919850176707">
              <div class="icon">
                <IoCall />
              </div>
              <div class="content">
                <h4>Contact Us</h4>
                <p>+919850176707</p>
              </div>
            </a>
          </div>
        </div>
        <div class="header-right">
          <div class="top_section">
            <div class="list">
              <a href="">
                <FaWhatsapp />
              </a>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaGoogle />
              </a>
        
            </div>
          </div>
          <div class="bottom_section">
            <div class="navs">
              {navItem.map((item, index) => (
                <Link key={index} to={item.link_path}>
                  {item.link_name}
                </Link>
              ))}

              <Link class="btn" to="/contact-us">
                <div class="inner_text">Contact us</div>
              </Link>
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
              <p>+919850176707</p>
            </div>
          </div>

          <div class="hamburger" onClick={() => setMobNav(!mobNav)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {mobNav && (
          <div class="mobsection-header parent">
            <div class="overlay"></div>
            <div class="navsection_item">
              {navItem.map((item, index) => (
                <Link
                  className="nav_link"
                  onClick={() => setMobNav(false)}
                  key={index}
                  to={item.link_path}
                >
                  {item.link_name}
                </Link>
              ))}

              <Link
                className="btn"
                to="/contact"
                onClick={() => setMobNav(false)}
              >
                <span class="inner_text">Contact us</span>
              </Link>

              <div class="social_media_links">
                <a
                  href=""
                  className="social_l"
                  onClick={() => setMobNav(false)}
                ></a>
                <a
                  href=""
                  className="social_l"
                  onClick={() => setMobNav(false)}
                ></a>
                <a
                  href=""
                  className="social_l"
                  onClick={() => setMobNav(false)}
                ></a>
                <a
                  href=""
                  className="social_l"
                  onClick={() => setMobNav(false)}
                ></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
