import React from "react";
import PagetoTop from "../../comps/pagetop/PagetoTop";
import abstract_image from "../../assests/abstract.png";
import "./About.scss";
import dummy_img from "../../assests/images.jpeg";

import vision_img from "../../assests/vision_img 1.png";
import mission_img from "../../assests/mission_icon 1.png";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';


// client 
import prima from "../../assests/clientts/prima.jpg";
import ansox from "../../assests/clientts/ansox.jpg";
import astron from "../../assests/clientts/astron.jpg";

const About = () => {
  const coreValue = [
    {
      heading: "Commitment",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      heading: "Commitment",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      heading: "Commitment",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
  ];

  const clients = [
    {
      title:"Prima pvt. ltd",
      image:prima
    },
    {
      title:"Ansox",
      image:ansox
    },
    {
      title:"Astron Switch Craft",
      image:astron
    },
  ]
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
              The company started its operations in 1998 under the name and
              style of "Rohini Plastic Products" and subsequently because of its
              quality and performance it was recognized in the field of
              manufacturing plastic products. At present we are manufacturing
              plastic components for the Manufacturer. We are in the process of
              expanding our business.
            </p>
            <p>
              The company has embarked on a modernization program to that end it
              has chosen to go for quality management system as per AN ISO
              9001:2015 in its organization.
            </p>
            <p>
              Company’s aims are to start marketing by our own with high growth
              rate and new production technology.
            </p>

            <div class="bottom">
              <div class="left_list">
                <ul>
                  <li>Conversion of cash into raw material.</li>
                  <li>Conversion of cash into raw material.</li>
                </ul>
              </div>

              <div class="right_panel">
                <h3>
                  Total area of <br />
                  company
                </h3>
                <h5>1500 sq.ft.</h5>
              </div>
            </div>
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

      <div class="founder_parent parent">
        <div class="founder_cont cont">
          <div class="founder_image">
            <img src={dummy_img} alt="" />
          </div>
          <div class="founder_content">
            <h2 class="name">Mr. Dattatray N. Labade</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' 
            </p>
            <div class="btn">
              <div class="inner_text">Contact us</div>
            </div>
          </div>
        </div>
        <div class="image">
          <img src={abstract_image} alt="" />
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
                <ul>
                  <li>
                    To delight our customer in quality, delivery, and cost
                    through continuous improvement and customer interaction.
                  </li>
                  <li>
                    To delight our customer in quality, delivery, and cost
                    through continuous improvement and customer interaction.
                  </li>
                  <li>
                    To delight our customer in quality, delivery, and cost
                    through continuous improvement and customer interaction.
                  </li>
                </ul>
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
              <ul>
                <li>
                  To delight our customer in quality, delivery, and cost through
                  continuous improvement and customer interaction.
                </li>
                <li>
                  To delight our customer in quality, delivery, and cost through
                  continuous improvement and customer interaction.
                </li>
                <li>
                  To delight our customer in quality, delivery, and cost through
                  continuous improvement and customer interaction.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="our_clients parent">
        <div class="our_cleints_cont cont">
          <div class="top_heading">
            <p className="sub_text">We Are Manufacured</p>
            <h1 className="sub_heading"> Our Clients </h1>
          </div>
          <Swiper
            slidesPerView={4}
            centeredSlides={false}
            spaceBetween={0}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
          {clients.map((item,index)=>(
 <SwiperSlide  className="swiper-slide" >
 <div class="cleint bg-img-cover" style={{backgroundImage:`url(${item.image})`}} >
   <h1>{item.title}</h1>
 </div>
</SwiperSlide>
          ))}
             
            
          
          </Swiper>
        </div>
      </div>

      <div class="core_values parent">
        <div class="core_values_cont cont">
          {coreValue.map((item, index) => (
            <div class="content">
              <div class="left">
                <div class="icon"></div>
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
