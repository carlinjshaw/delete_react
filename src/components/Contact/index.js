import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  // State variables for form fields and error message
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Update state based on input type
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate email and name
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or Name is invalid");
      return;
    }

    // Validate message
    if (!message) {
      setErrorMessage("Message is required.");
      return;
    }

    // Clear form fields after submission
    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section id="reach-out" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">Get in touch with me!</h2>
      </div>

      <div className="contact-info">
        {/* Contact information */}
        <div>
          <h3>Hey there!</h3>
          <p>
            I'd love to hear from you! You can send me an email at the link below 
            or fill out the contact form!
          </p>
          <a href="mailto:Srgowen2@gmail.com">
            Srgowen2@gmail.com
          </a>
        </div>

        {/* Contact form section */}
        <div className="contact-form">
          <h3>Contact Me</h3>
          <form className="form">
            {/* Name */}
            <label htmlFor="contact-name">Name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Your Name"
            />

            {/* Email */}
            <label htmlFor="contact-email">Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Your Email"
            />

            {/* Message */}
            <label htmlFor="contact-message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              id="contact-message"
              placeholder="Your Message"
            />
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>

        {/* Display error message if present */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
