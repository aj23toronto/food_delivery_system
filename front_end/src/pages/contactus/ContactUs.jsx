import React from "react";
import "./ContactUs.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Please reach out with your questions or feedback.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><b>Email:</b> support@thapareats.com</p>
          <p><b>Phone:</b> +91 98765 43210</p>
          <p><b>Address:</b> Thapar Institute of Engineering & Technology, Patiala</p>
        </div>

        <div className="contact-form">
          <h3>Send us a message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
