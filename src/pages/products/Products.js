import React, { useState } from "react";
import PagetoTop from "../../comps/pagetop/PagetoTop";
import "./Products.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import sun_clamp from "../../assests/product_item/sun_visor_clamp.jpg";
import fender_clips from "../../assests/product_item/fender_clips.jpg";
import plastic_wash from "../../assests/product_item/plastic_washers.jpg";
import pull_pin from "../../assests/product_item/pull_pin.jpg";
import card_stand from "../../assests/product_item/mb_stand.jpeg";
import diwali_light from "../../assests/product_item/diwali_ligjitng.jpeg";

const Products = () => {
  const [activeindex, setActiveindex] = useState(null);

  const productItems = [
    {
      title: "Sun Visor Clamp",
      desc: " Durable sun visor clamps, perfect for securing visors in vehicles with ease.",
      image: sun_clamp,
    },
    {
      title: "Fender Clips",
      image: fender_clips,
      desc: "High-quality fender clips for securely attaching vehicle body parts.",
    },
    {
      title: "Plastic Washers",
      image: plastic_wash,
      desc: "Lightweight and sturdy plastic washers for various industrial and home applications.",
    },
    {
      title: "Pull Pin",
      image: pull_pin,
      desc: "Reliable pull pins for locking and quick-release mechanisms.",
    },
    {
      title: "Card Mobile Stand",
      image: card_stand,
      desc: "Compact and portable card mobile stands, ideal for hands-free usage.",
    },
    {
      title: "Festival Lighting",
      image: diwali_light,
      desc: "Vibrant and decorative Diwali lighting to brighten up your celebrations.",
    },
  ];

  return (
    <>
      <PagetoTop
        pageTop_title="Our Products"
        first_link_name="Home"
        first_link_path="/"
        second_link_name="Our Products"
        second_link_path="/products"
      />

      <div class="products_parent parent">
        <div class="out_products_cont cont">
          <h2>All Types Of Injection molding</h2>
          <div class="products_list">
            {productItems.map((item, index) => (
              <>
               
                  <div
                    className="box box1 bg-img-contain"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div class="overlay">
                      <h3>{item.title}</h3>
                      <div
                        class={activeindex === index ? "icon active" : "icon"}
                        onClick={() =>
                          setActiveindex(activeindex === index ? null : index)
                        }
                      >
                        <MdOutlineKeyboardArrowRight />
                      </div>
                    </div>
                  </div>
             

                <div
                  class={activeindex === index ? "box2 box active" : "box2 box"}
                >
                  <p>
                  {activeindex === index && item.desc}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
