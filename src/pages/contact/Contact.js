import React, { useState } from "react";
import "./Contact.scss";
import PagetoTop from "../../comps/pagetop/PagetoTop";
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function Submit(e) {
    e.preventDefault(); // Prevent default form submission behavior
  
    const formEle = document.querySelector("form"); // Ensure the form element is correctly selected
  
    // Check if formEle is found
    if (!formEle) {
      console.error("Form element not found");
      return;
    }
  
    const formDatab = new FormData(formEle);
  
    fetch(
      "https://script.google.com/macros/s/AKfycbxZwAaBNLyzww4LfMZSE0PP94dN9tAS1NF16lsXaCK0zFY785IGdbQnxGhXqQZwoOw7/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Data submitted successfully:", data);
        // Clear the form inputs
       
      })

    
      .catch((error) => {
        console.error("Error during submission:", error);
      });
      formEle.reset();
      alert("Thank you for contact rohini plastics")
  }
  
  
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

            <form action=""   onSubmit={(e) => Submit(e)} >
              <input type="text" name="Name" placeholder="Name*" required />
              <input type="text" name="Contact_number" placeholder="Contact Number*" required />
              <input type="text" name="Organization_name" placeholder="Organization Name" />
              <input type="text" name="Email_id" placeholder="Email Id"  />
              <textarea type="text" name="Message" placeholder="Message" />
              <button className="btn" type="submit" >
               <span class="inner_text">
               Send message
               </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
