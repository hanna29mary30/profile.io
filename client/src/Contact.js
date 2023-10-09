import React from "react";
import contact from "./images/contact.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"; 

const Contact = () => {
  const containerStyle = {
    backgroundImage: `url(${contact})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "95vh",
    position: "relative",
    color: "#fff",
  };

  const overlayStyle = {
    position: "absolute",
    top: "120px",
    left: "100px",
    padding: "20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  };

  const headingStyle = {
    marginBottom: "60px",
  };

  const socialMediaStyle = {
    marginTop: "20px",
  };

  const iconStyle = {
    fontSize: "40px",
    color: "#fff",  
    marginRight: "20px", 
    marginTop:"10px"
    
  };

  return (
    <div className="container-fluid p-0" style={containerStyle}>
      <div className="row">
        <div className="col-md-6" style={overlayStyle}>
          <h1 style={headingStyle}>Contact Information</h1>
          <div className="p-8">
            <h3>
              <FontAwesomeIcon icon={faEnvelope} style={iconStyle} /> Email:{" "}
              <a href="mailto:example@example.com">example@example.com</a>
            </h3>
            <h3>
              <FontAwesomeIcon icon={faPhone} style={iconStyle} /> Phone:{" "}
              <a href="tel:+123456789">+123456789</a>
            </h3>
            <h3>
              <FontAwesomeIcon icon={faAddressBook} style={iconStyle} /> Address: xyz, City,
              Country
            </h3>
            <div style={socialMediaStyle}>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
              </a>{" "}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
              </a>{" "}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
