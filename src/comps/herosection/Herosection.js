import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Herosection.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import hero_img_1 from "../../assests/hero_img_1.webp";
import abstract from "../../assests/abstract.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Herosection = () => {
  return (
    <>
      <div class="herosection_parent parnet">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          loop
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
           <SwiperSlide className="swiperslide">
            <div class="overlay">
              <div class="left">
                <div class="content">
                  <div class="box">
                    <div class="overlay"></div>
                  </div>

                  <h1 className="tagline">
                    <div class="overlay">
                      Turning your idea into reality with an expert and
                      innovative product design
                    </div>
                  </h1>
                </div>

                <img className="abstract" src={abstract} alt="" />
              </div>
              <div class="right">
                <img src={hero_img_1} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperslide">
            <div class="overlay">
              <div class="left">
                <div class="content">
                  <div class="box">
                    <div class="overlay"></div>
                  </div>

                  <h1 className="tagline">
                    <div class="overlay">
                      Innovative Plastic Molding Solutions Tailored for
                      Durability, Precision, and Future Growth
                    </div>
                  </h1>
                </div>

                <img className="abstract" src={abstract} alt="" />
              </div>
              <div class="right">
                <img src={hero_img_1} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperslide">
            <div class="overlay">
              <div class="left">
                <div class="content">
                  <div class="box">
                    <div class="overlay"></div>
                  </div>

                  <h1 className="tagline">
                    <div class="overlay">
                      Delivering High-Quality Plastic Products for Industries,
                      Crafted with Unmatched Precision
                    </div>
                  </h1>
                </div>

                <img className="abstract" src={abstract} alt="" />
              </div>
              <div class="right">
                <img src={hero_img_1} alt="" />
              </div>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </>
  );
};

export default Herosection;
