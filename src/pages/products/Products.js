import React, { useState } from "react";
import PagetoTop from "../../comps/pagetop/PagetoTop";
import "./Products.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import product_item from "../../assests/product_item/item.png";

const Products = () => {
  const [activeindex, setActiveindex] = useState(null);

  const productItems = [
    {
      title: "Sun Visor Clamp",
      desc: " Durable sun visor clamps, perfect for securing visors in vehicles with ease.",
      image: product_item,
    },
    {
      title: "Fender Clips",
      image: product_item,
      desc: "High-quality fender clips for securely attaching vehicle body parts.",
    },
    {
      title: "Plastic Washers",
      image: product_item,
      desc: "Lightweight and sturdy plastic washers for various industrial and home applications.",
    },
    {
      title: "Pull Pin",
      image: product_item,
      desc: "Reliable pull pins for locking and quick-release mechanisms.",
    },
    {
      title: "Card Mobile Stand",
      image: product_item,
      desc: "Compact and portable card mobile stands, ideal for hands-free usage.",
    },
    {
      title: "Diwali Lighting",
      image: product_item,
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
                {!(index === 0 && activeindex === productItems.length - 1) && (
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
                )}

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
