import React from "react";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpg";
import profile_image from "./images/profile_image.png";
import "./Carousels.css";
import { carousels } from "bootstrap";

export const Carousels = () => {
  return (
    <div className="carousels">
      <div
        id="carouselExampleDark"
        
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={image1}
              className="d-block w-100"
              alt="image1"
              style={{
                
                height: "675px",
                width: "900px",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={image2}
              className="d-block w-100"
              alt="image2"
              style={{
                
                height: "675px",
                width: "900px",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={image3}
              className="d-block w-100"
              alt="image3"
              style={{
                
                height: "675px",
                width: "900px",
              }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
      <img src={profile_image} alt="Profile" class="profile-image" />
      <h1 class="heading1">Hi There, I am Hanna Mary Siby</h1>
      <h2 class="heading2">Software Engineer</h2>
    </div>
  );
};

export default Carousels;
