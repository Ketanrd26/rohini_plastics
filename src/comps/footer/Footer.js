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
              <a href="https://maps.app.goo.gl/kJ3vXRe2QmfiM6p18" target="blank" >
                Sr.No.17/1, Shri Ganesh Nagar, Sayaji Thakur Marga, Dhawde
                Wasti, Bhosari, Pune - 39
              </a>
            </div>
          </div>
          <div class="middle">
            {navItem.map((item, index) => (
              <Link key={index} to={item.link_path} >{item.link_name}</Link>
            ))}
          </div>

          <div class="privacy">
            <Link  to="/privacy" > Privacy Policy</Link>
            
          </div>
          <div class="social_media_links">
            <a class="icon" target="blank"  href="https://www.facebook.com/share/19nLfgs5Y9/">
              <FaFacebookF />
            </a>
            <a class="icon"  target="blank" >
              <FaInstagram />
            </a>
            <a class="icon" target="blank"  href="https://wa.me/+919850176707" >
              <FaWhatsapp />
            </a>
            <a class="icon" target="blank" href="https://www.google.com/search?q=rohin+plastic&rlz=1C1RXQR_enIN1021IN1021&oq=rohin&gs_lcrp=EgZjaHJvbWUqCAgCEEUYJxg7MgYIABBFGDwyBggBEEUYOTIICAIQRRgnGDsyBggDECMYJzIPCAQQLhhDGLEDGIAEGIoFMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMzQxNWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8" >
              <FaGoogle />
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
    </>
  );
};

export default Footer;
