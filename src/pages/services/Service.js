import React from "react";
import PagetoTop from "../../comps/pagetop/PagetoTop";
import "./Service.scss";
import moldingMchine from "../../assests/icons/molding_machine.webp";
import pd from "../../assests/icons/product.webp";
import assembly from "../../assests/icons/assembly.webp";


import service1_image from "../../assests/molding_service.jpeg"
import service2_image from "../../assests/product_design.webp"
import service3_image from "../../assests/assembly.webp"
import { Helmet } from "react-helmet";




const Service = () => {
  const service_list = [
   
    {
      service_name: "Product designing and development",
      icon: pd,
      content:
        "Design and development are two key elements necessary to create any product. From start to finish, each phase of the product's lifecycle needs careful coordination between these two disciplines for a successful outcome. We design the product by using a powerful 3D design software which can convert your imagination to reality.",
      image: service2_image,
    },
    {
      service_name: "Plastic injection moulding solutions",
      icon: moldingMchine,
      content:
        "Injection moulding is a widely used manufacturing process for producing parts by injecting molten material into a mold cavity under high pressure. It's particularly suited for mass production of complex and precise parts. We manufacture a wide range of products in Injection moulding for the automobile sector & other industries.",
      image: service1_image,
    },
    {
      service_name: "Assembly",
      icon: assembly,
      content:
        "A process where a single part is created using two or more different materials in combination. Typically the first material sometimes referred to as the substrate is partially or fully covered by subsequent material during manufacturing process. We covert row material to finish product by using technology and highly skilled team of workers.",
      image: service3_image,
    },
  ];
  return (
    <>
    <Helmet>
        <title>Our Products | injection molding machine manufacturers</title>
        <meta
          name="description"
          content="Discover the exceptional services offered by Rohini Plastics, including custom plastic molding, product design, prototyping, and large-scale manufacturing. Delivering reliable solutions for all your plastic needs."
        />
        <meta
          name="keywords"
          content="injection moldable plastics,injection moulding,injection plastic molding machine,pvc mould,plastic injection moulding,plastic injection molding companies, Rohini Plastics,injection plastic molding machine, custom plastic molding, industrial plastic solutions,injection moldable plastics, durable plastic materials, high-quality plastic products, plastic manufacturing experts, plastic product range, plastic moulding solutions"
        />

<link
          rel="canonical"
          href="https://rohini-plastics.vercel.app/services"
        />
      </Helmet>
      <PagetoTop
        pageTop_title="Our Services"
        first_link_name="Home"
        first_link_path="/"
        second_link_name="services"
        second_link_path="/services"
      />

      <div class="our_services_parent parent">
        <div class="our_services_cont cont">
          <div class="top_heading">
            <p className="sub_text">We Are Manufacured</p>
            <h1 className="sub_heading">Our Services</h1>
          </div>
          <div class="service_list">
            {service_list.map((item, index) => (
              <div class="service">
                <div
                  class="left bg-img-cover"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div class="right">
                  <div class="top">
                    <div class="icon">
                      <img src={item.icon} alt="" />
                    </div>
                    <h1>{item.service_name}</h1>
                  </div>

                  <div class="bottom">
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
