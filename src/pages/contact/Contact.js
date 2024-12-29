import React, { useState } from "react";
import "./Contact.scss";
import PagetoTop from "../../comps/pagetop/PagetoTop";
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <>
      <PagetoTop
        pageTop_title="Contact Us"
        first_link_name="Home"
        first_link_path="/"
        second_link_name="contact-us"
        second_link_path="/contact-us"
      />

      <div class="contact_parent parent">
        <div class="contact_cont cont">
          <div class="left bg-img-cover"></div>
          <div class="right">
            <div class="top">
              <h2>Get In Touch</h2>
              <p>
                Got questions or want to book a consultation? Just fill out the
                form below, and we’ll get back to you soon. Can’t wait to chat!
              </p>
            </div>

            <form action="">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Organization Name" />
              <input type="text" placeholder="Contact Number*" required />
              <input type="text" placeholder="Email Id*" required />
              <textarea type="text" placeholder="Message" />
              <button className="btn" >
               <div class="inner_text">
               Send message
               </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
