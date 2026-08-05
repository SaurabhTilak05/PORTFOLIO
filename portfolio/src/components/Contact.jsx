import React, { useState } from "react";
import "./Contact.css";
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:saurabhtilak05@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="container fade-in-up">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          I’d love to hear from you! Whether you have a question, project idea, or just want to say hi —
          feel free to reach out or send a message below.
        </p>

        <div className="contact-info-grid">
          <a href="mailto:saurabhtilak05@gmail.com" className="contact-info-card">
            <FaEnvelope />
            <span>saurabhtilak05@gmail.com</span>
          </a>
          <a href="tel:+919765303776" className="contact-info-card">
            <FaPhoneAlt />
            <span>+91 9765303776</span>
          </a>
          <div className="contact-info-card">
            <FaMapMarkerAlt />
            <span>Pune, Maharashtra, India</span>
          </div>
          <a
            href="https://github.com/SaurabhTilak05"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info-card"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/saurabh-tilak-502ab6350/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info-card"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn send-btn">
            <FaPaperPlane className="icon" /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
