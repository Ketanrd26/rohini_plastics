import React from "react";
import PagetoTop from "../../comps/pagetop/PagetoTop";
import abstract_image from "../../assests/abstract.png";
import "./About.scss";
import dummy_img from "../../assests/images.jpeg";

import vision_img from "../../assests/vision_img 1.webp";
import mission_img from "../../assests/mission_icon 1.webp";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// icons

import Commitment from "../../assests/icons/commitment.gif";
import Innovative from "../../assests/icons/Innovative.gif";
import Business_Ethics from "../../assests/icons/Business_Ethics.gif";
import Grow_Together from "../../assests/icons/Grow_Together.gif";

// client
import prima from "../../assests/clientts/prima_logo.png";
import ansox from "../../assests/clientts/ansox.png";
import astron from "../../assests/clientts/astron.webp";
import jaguar from "../../assests/clientts/jaguar.jpeg";
import strapex from "../../assests/clientts/strapex.webp";
import spica from "../../assests/clientts/Spica-logo.png";
import netra from "../../assests/clientts/netra.png";

const About = () => {
  const coreValue = [
    {
      heading: "Commitment",
      icon: Commitment,
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      heading: "Innovative",
      icon: Innovative,
      para: "At Rohini Plastics, we strive to stay ahead of the curve by embracing cutting-edge technology and creative thinking. Our innovative approach enables us to design and manufacture solutions that meet the unique needs of our clients, ensuring efficiency, functionality, and sustainability. Whether it's custom product development or enhancing existing processes, we are committed to pushing boundaries and achieving excellence.",
    },
    {
      heading: "Business Ethics",
      icon: Business_Ethics,
      para: "Integrity is the foundation of our success. We operate with honesty, accountability, and transparency, ensuring that every decision we make aligns with our ethical standards. From sourcing materials responsibly to maintaining fair practices with clients and employees, we uphold trust and respect in every interaction. Our commitment to ethical business practices fosters a culture of reliability and long-term partnerships.",
    },
    {
      heading: "Grow Together",
      icon: Grow_Together,
      para: "Collaboration is at the heart of our business. We believe that true success is a collective effort, achieved when all stakeholders—clients, employees, and partners—work together. At Rohini Plastics, we prioritize building relationships that encourage shared growth, mutual learning, and innovation. By empowering our team and supporting our clients, we aim to create a thriving ecosystem where everyone succeeds.",
    },
  ];

  const clients = [
    {
      image: prima,
    },
    {
      image: ansox,
    },
    {
      image: astron,
    },
    {
      image: jaguar,
    },
    {
      image: strapex,
    },
    {
      image: spica,
    },
    {
      image: netra,
    },
  ];
  return (
    <>
      <PagetoTop
        pageTop_title="About Us"
        first_link_name="Home"
        first_link_path="/"
        second_link_name="About"
        second_link_path="/about"
      />

      <div class="about_us parent">
        <div class="about_us_cont cont">
          <div class="left">
            <div class="top_heading">
              <p className="sub_text">We Are Manufacured</p>
              <h1 className="sub_heading">About Us</h1>
            </div>
            <p>
              The company started its operations in 2004   under the name and
              style of "Rohini Plastic Products" and subsequently because of its
              quality and performance it was recognized in the field of
              manufacturing plastic products. At present we are manufacturing
              plastic components for the Manufacturer. We are in the process of
              expanding our business.
            </p>
            <p>
              The company has embarked on a modernization program to that end it
              has chosen to go for quality management system as per AN <strong style={{color:`var(--accent)`}} >
              ISO
              9001:2015
                </strong> in its organization.
            </p>
            <p>
              Company’s aims are to start marketing by our own with high growth
              rate and new production technology.
            </p>
          </div>

          <div class="right">
            <div class="left">
              <div class="top bg-img-cover"></div>
              <div class="bottom bg-img-cover"></div>
            </div>
            <div class="right bg-img-cover"></div>
          </div>
        </div>
      </div>

      <div class="vision_mission_parent parent">
        <div class="vision">
          <div class="overlay">
            <div class="content">
              <div class="top">
                <div class="icon">
                  <img src={mission_img} alt="" />
                </div>
                <h1>Mission</h1>
              </div>
              <div class="bottom">
                <p>
                  Rohini Plastics is an independent company dedicated to
                  manufacturing a diverse range of high-quality plastic
                  products. Our mission is to maintain a customer-focused
                  approach with ongoing improvements in our manufacturing
                  processes while delivering exceptional quality and service.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="mision">
          <div class="content">
            <div class="top">
              <div class="icon">
                <img src={vision_img} alt="" />
              </div>
              <h1>Vision</h1>
            </div>
            <div class="bottom">
              <p>
                To become a trusted provider of innovative product design and
                plastic molding solutions. Our goal is to continuously deliver
                value-driven results with a focus on reliability,
                sustainability, and excellence, while building strong
                partnerships with our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="clients_parent parent">
        <div class="client_cont cont">
          <h3>Our Clients</h3>
          <div class="client_list">
            {clients.slice(0, 4).map((item, index) => (
            <div class="client_logo">
                <img src={item.image} alt="" key={index} class="clients_logo" />
            </div>
            ))}
          </div>
          <div class="client_list">
            {clients.slice(3, 8).map((item, index) => (
            <div class="client_logo">
                <img src={item.image} alt="" key={index} class="clients_logo" />
            </div>
            ))}
          </div>
         
        </div>
      </div>

      <div class="core_values parent">
        <div class="core_values_cont cont">
          {coreValue.map((item, index) => (
            <div class="content">
              <div class="left">
                <div class="icon">
                  <img src={item.icon} alt="" />
                </div>
              </div>

              <div class="right">
                <h2>{item.heading}</h2>
                <p>{item.para}</p>
              </div>

              <div class="circle"></div>
            </div>
          ))}

          <div class="line"></div>
        </div>
      </div>
    </>
  );
};

export default About;
