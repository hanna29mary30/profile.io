import React from "react";
import contact from "./images/contact.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faAddressBook } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <div className="container-fluid p-0" style={containerStyle}>
      <div className="row">
        <div className="col-md-6" style={overlayStyle}>
          <h1 style={headingStyle}>Contact Information</h1>
          <div className="p-8">
            <h3>
              <FontAwesomeIcon icon={faEnvelope} />  Email:{" "}
              <a href="mailto:example@example.com">example@example.com</a>
            </h3>
            <h3>
              <FontAwesomeIcon icon={faPhone} />  Phone:{" "}
              <a href="tel:+123456789">+123456789</a>
            </h3>
            <h3>
              <FontAwesomeIcon icon={faAddressBook} />  Address: xyz, City,
              Country
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
