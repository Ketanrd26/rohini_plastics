import React from "react";
import { SwiperSlide } from "swiper/react";
import Herosection from "../../comps/herosection/Herosection";
import "./Home.scss";
const Home = () => {
  return (
    <>
      {/*  herosection */}

      <Herosection />

      {/* miniabout */}

      <div class="mini-about-parent parent">
        <div class="mini-about-cont cont">
          <div class="left">
            <div class="div"></div>
            <div class="div"></div>
            <div class="div"></div>
          </div>

          <div class="right">
            <h3>It is a long established fact fact</h3>

            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search 
            </p>

            <div class="btn">
              <div class="inner_text">
                Know More
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
