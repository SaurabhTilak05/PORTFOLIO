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

        <div className="contact-layout">
          <aside className="contact-info">
            <h3 className="contact-info-heading">Contact Information</h3>

            <ul className="contact-info-list">
              <li className="contact-info-item">
                <span className="contact-info-icon">
                  <FaEnvelope />
                </span>
                <div className="contact-info-text">
                  <span className="contact-info-label">Email</span>
                  <a href="mailto:saurabhtilak05@gmail.com">
                    saurabhtilak05@gmail.com
                  </a>
                </div>
              </li>

              <li className="contact-info-item">
                <span className="contact-info-icon">
                  <FaPhoneAlt />
                </span>
                <div className="contact-info-text">
                  <span className="contact-info-label">Phone</span>
                  <a href="tel:+919765303776">+91 9765303776</a>
                </div>
              </li>

              <li className="contact-info-item">
                <span className="contact-info-icon">
                  <FaMapMarkerAlt />
                </span>
                <div className="contact-info-text">
                  <span className="contact-info-label">Location</span>
                  <span>Pune, Maharashtra, India</span>
                </div>
              </li>
            </ul>

            <div className="contact-socials">
              <span className="contact-info-label">Find me on</span>
              <div className="contact-social-links">
                <a
                  href="https://github.com/SaurabhTilak05"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/saurabh-tilak-502ab6350/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </aside>

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
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="btn send-btn">
              <FaPaperPlane className="icon" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
