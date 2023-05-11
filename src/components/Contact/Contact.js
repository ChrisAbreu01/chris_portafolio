import React from "react";
import contactInfo from "../../data/Contact-data";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="Contact" id="contact">
      <div className="grid-contact container">
        <div className="Contact-left-side">
          <h2 className="wow fadeInDown" data-wow-delay=".5s">
            Connect with me:
          </h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            Want to get in touch?
          </p>
          <div class="contact-icons-container">
            {contactInfo.map((contact) => (
              <a
                href={contact.href}
                target={contact.target}
                without
                rel="noopener noreferrer"
                id={contact.contact}
                className="icon-box"
                key={contact.id}
              >
                <i className={contact.className}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
