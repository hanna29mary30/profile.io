import React from "react";
import "./Carousels.css";
import { carousels } from "bootstrap";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpg";
import profileImage from "./images/profile_image.png";

const images = [image1, image2, image3];

export const Carousels = () => {
  return (
    <div className="carousels">
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item${index === 0 ? " active" : ""}`}>
              <img
                src={image}
                className="d-block w-100"
                alt={`image${index + 1}`}
                style={{
                  height: "675px",
                  width: "900px",
                }}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
        </button>
      </div>
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h1 className="heading1">Hi There, I am Hanna Mary Siby</h1>
      <h2 className="heading2">Software Engineer</h2>
    </div>
  );
};

export default Carousels;
