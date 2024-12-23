import React from "react";
import "./Footer.scss";
import logo from "../../assests/rohini_plastics_logo.png";
import footer_img from "../../assests/footer_img.png";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
const Footer = () => {
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
            <h1>Rohini <br/> Plastics</h1>
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
            <a class="icon">
            <FaFacebookF />
            </a>
            <a class="icon">
            <BsTwitterX />
            </a>
            <a class="icon">
            <FaWhatsapp />
            </a>
            <a class="icon">
            <FaGoogle />
            </a>
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
