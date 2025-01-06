import React from "react";
import "./PagetoTop.scss";
import { Link } from "react-router-dom";
// import pagetopimg from "../../assests/page_topimg.png"
import pagetopimg from "../../assests/footer_img.png";

import abstract from "../../assests/abstract.png";
const PagetoTop = (props) => {
  return (
    <>
      <div class="pagetop parent">
        <div class="overlay parent">
          <div class="pagetop_cont cont">
            <div class="left">
            <div class="content">
                  <div class="box">
                    <div class="overlay"></div>
                  </div>

                  <h1 className="tagline">
                    <div class="overlay">
                      <h1>
                        {props.pageTop_title}
                      </h1>
                     <div class="links">
                        <Link to={props.first_link_path}>
                       {props.first_link_name}
                        </Link>
                        /
                        <Link to={props.second_link_path}>
                        {props.second_link_name}
                        </Link>

                     </div>
                    </div>
                  </h1>
                </div>
            </div>
           
          </div>

          <img className="abstract" src={abstract} alt="" />
          <div class="right">
                <img src={pagetopimg} alt=""/>
            </div>
        </div>
      </div>
    </>
  );
};

export default PagetoTop;
