import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Herosection from "../../comps/herosection/Herosection";
import "./Home.scss";
import { BsArrowDown } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import dummy_image from "../../assests/images.jpeg";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

// icons
import fm from "../../assests/icons//family.gif";
import Innovative from "../../assests/icons/Innovative.gif";
import pb from "../../assests/icons/task.gif";
import call from "../../assests/icons/24-hours-support.gif";
import ready_use from "../../assests/icons/ready_to_use.gif";
import custom_product from "../../assests/icons/custom_product.gif"

const Home = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);
  return (
    <>
      {/*  herosection */}

      <Herosection />

      {/* miniabout */}

      <div class="mini-about-parent parent">
        <div class="mini-about-cont cont">
          <div class="left" data-aos="fade-up">
            <div class="div"></div>
            <div class="div2 bg-img-cover"></div>
            <div class="div3 bg-img-cover"></div>
          </div>

          <div class="right" data-aos="fade-down">
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

            <Link class="btn" to="/about">
              <div class="inner_text">Know More</div>
            </Link>
          </div>
        </div>
      </div>

      {/* activities */}

      <div class="activities_parent parent">
        <div class="activities_cont cont">
          <h1>Activities</h1>

          <div class="card_list">
            <div class="card" data-aos="fade-up">
              <div class="left">
                <div class="icon">
                  <img src={custom_product} alt=""/>
                </div>
              </div>
              <div class="content">
                <h3>Custom Plastic Product Manufacturing</h3>
                <p>
                  Custom plastic manufacturing: Tailored solutions with
                  precision, serving diverse industries using advanced
                  techniques for unmatched quality.
                </p>
              </div>
            </div>
            <div class="card" data-aos="fade-up">
              <div class="left">
                <div class="icon">
                <img src={ready_use} alt=""/>

                </div>
              </div>
              <div class="content">
                <h3> Ready-to-Use Plastic <br/> Products</h3>
                <p>
                  Ready-to-use products: Durable, eco-friendly plastic items
                  designed for various applications, available in stock for
                  quick delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our values */}
      <div class="values-parent parent">
        <div class="values-cont cont">
          <div class="card" data-aos="fade-up" data-aos-easing="ease-in-sine">
            <div class="top bg-img-cover">
              <h2>Family Values</h2>
            </div>
            <div class="bottom">
              <p>
                Our family includes respect honesty, commun ication, flexiblity
                & responsiblity.
              </p>
            </div>

            <div class="icon">
              <img src={fm} alt="" />
            </div>
          </div>
          <div class="card" data-aos="fade-down" data-aos-easing="ease-in-sine">
            <div class="top innovative bg-img-cover">
              <h2>Innovative Thinking</h2>
            </div>
            <div class="bottom">
              <p>
                We work with our clients to provide genuine long term innovative
                solution not just a quick fix.
              </p>
            </div>

            <div class="icon">
              <img src={Innovative} alt="" />
            </div>
          </div>
          <div class="card" data-aos="fade-up" data-aos-easing="ease-in-sine">
            <div class="top pb bg-img-cover">
              <h2>Problem Solving</h2>
            </div>
            <div class="bottom">
              <p>
                We treat every projects as if it were our own. we can work with
                you to find every best solution.
              </p>
            </div>

            <div class="icon">
              <img src={pb} alt="" />
            </div>
          </div>
          <div class="card" data-aos="fade-down" data-aos-easing="ease-in-sine">
            <div class="top cs bg-img-cover">
              <h2>Customer Support</h2>
            </div>
            <div class="bottom">
              <p>
                Our Service first attitude drives everything we do. we are
                always available for our clients
              </p>
            </div>

            <div class="icon">
              <img src={call} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* quality policy */}

      <div class="quality-parent parent">
        <div class="left cont" data-aos="fade-down">
          <h3>OUR QUALITY POLICY</h3>
          <p>
            We at.Rohini Plastic are committed to manufacture of Injection
            Molded Plastic Components & Engineering Components meeting Customer
            satisfaction within stipulated time with cost effectiveness.
          </p>
          <p>
            We are committed to maintain effective Quality Management System
            Through continual improvement of our product with Customer
            Satisfaction & training needs of our employees.
          </p>
          <p>
            The objectives will be maintained, measured & analyzed periodically
            to achieve our target. “
          </p>
        </div>

        <div class="right">
          <div class="coloured_div"></div>

          <div class="photo_div bg-img-cover" data-aos="fade-up"></div>
        </div>
      </div>

      {/* testiomneal */}

      <div class="testimoneal-parent parent">
        <div class="left">
          <h3>25</h3>
          <p>Years Of Experience</p>
        </div>
        <div className="right">
          <Swiper
            slidesPerView={1}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="swiper-slide" data-aos="flip-left">
              <div className="slide-content">
                <div class="top_side">
                  <img src={dummy_image} alt="" />
                  <div class="right_side">
                    <h1 class="name">Lorem lipsum</h1>
                    <div class="star">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tenetur labore ad architecto vel obcaecati neque debitis
                    provident blanditiis et iure!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-content">Slide 2</div>
            </SwiperSlide>
          </Swiper>

          <div className="custom-prev">
            <BsArrowDown />
          </div>
          <div className="custom-next">
            <BsArrowDown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
