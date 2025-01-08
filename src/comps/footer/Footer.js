import React from "react";
import "./Footer.scss";
import logo from "../../assests/rohini_plastics_logo.png";
import footer_img from "../../assests/footer_img.png";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
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
      link_path: "/services",
    },
    {
      link_name: "Our Products",
      link_path: "/products",
    },
    {
      link_name: "Contact Us",
      link_path: "/contact-us",
    },
  ];
  return (
    <>
      <div class="footer_parent parent">
        <div class="footer_cont cont">
          <div class="left">
            <div class="top">
              <img src={logo} alt="" />
              <h1>
                Rohini <br /> Plastics
              </h1>
            </div>
            <div class="bottom">
              <a
                href="https://maps.app.goo.gl/kJ3vXRe2QmfiM6p18"
                target="blank"
              >
                Sr.No.17/1, Shri Ganesh Nagar, Sayaji Thakur Marga, Dhawde
                Wasti, Bhosari, Pune - 39
              </a>
              <a href="tel:+919850176707" target="blank">
                +919850176707
              </a>
              <a href="tel:+918796409908" target="blank">
                +918796409908
              </a>
            </div>
          </div>
          <div class="middle">
            {navItem.map((item, index) => (
              <Link key={index} to={item.link_path}>
                {item.link_name}
              </Link>
            ))}
          </div>

          <div class="privacy">
            <Link to="/privacy"> Privacy Policy</Link>
          </div>
          <div class="social_media_links">
            <a
              class="icon"
              target="blank"
              href="https://www.facebook.com/share/19nLfgs5Y9/"
            >
              <FaFacebookF />
            </a>
            <a
              class="icon"
              target="blank"
              href="https://www.instagram.com/rohiniplastic?utm_source=qr&igsh=dWM0cG1rY2kwazY0"
            >
              <FaInstagram />
            </a>
            <a class="icon" target="blank" href="https://wa.me/+919850176707">
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div class="image">
          <img src={footer_img} alt="" />
        </div>
      </div>

      <div class="social_icons">
        <a class="icon" target="blank" href="https://wa.me/+919850176707">
          <span>
            <FaWhatsapp />
          </span>
          <p>Whatsapp</p>
        </a>
      </div>
      <div class="social_icons si2">
        <a class="icon" target="blank" href="tel:+919850176707">
          <span>
            <IoCallOutline />
          </span>
          <p>Call Now</p>
        </a>
      </div>
      <div class="social_icons si3">
        <a class="icon" target="blank" href="mailto:rohiniplastic1@gmail.com">
          <span>
            <CiMail />
          </span>
          <p>Mail Now</p>
        </a>
      </div>

      <div class="after_footer parent">
        <div class="after_footer_cont cont">
          <p>
            Copyright ©2023 All Rights Reserved | <a href="">Rohini Plastics</a>
            |
            <a href="https://wa.me/+917028997574">
              Developed By wave solutions
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
