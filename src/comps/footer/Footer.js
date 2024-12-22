import React from "react";
import "./Footer.scss";
import logo from "../../assests/rohini_plastics_logo.png";
import footer_img from "../../assests/footer_img.png";
import { Link } from "react-router-dom";
const Footer = () => {
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
      <div class="footer_parent parent">
        <div class="footer_cont cont">
          <div class="left">
            <img src={logo} alt="" />
            <h1>Rohini Plastics</h1>
          </div>
          <div class="middle">
            {navItem.map((item, index) => (
              <Link>{item.link_name}</Link>
            ))}
          </div>

          <div class="privacy">
            <Link>
            Privacy Policy
            </Link>
            <Link>
          Cookies
            </Link>
          </div>
          <div class="social_media_links">
            <div class="icon">
                
            </div>
            <div class="icon">

            </div>
            <div class="icon">

            </div>
            <div class="icon">

            </div>
          </div>
        </div>
        <div class="image">
          <img src={footer_img} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
