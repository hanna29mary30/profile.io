import "./Carousels.css"
import React, { useState } from "react";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpg";
import profile_image from "./images/profile_image.png"
export const Carousels = () => {
  return (
    <div class="carousels">
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
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

      
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={image1}
            class="d-block w-100"
            alt="image1"
            style={{
              
              margin: "25px",
              height: "600px",
              width: "900px",
            }}
          />
          
        </div>
        <div class="carousel-item">
          <img
            src={image2}
            class="d-block w-100"
            alt="image2"
            style={{ margin: "25px", height: "600px" ,width: "900px"}}
          />
          
        </div>
        <div class="carousel-item">
          <img
            src={image3}
            class="d-block w-100 h-10"
            alt="image2"
            style={{ margin: "25px", height: "600px",width: "900px" }}
          />
          
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
        
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
       
      </button>
    </div>
    <img src={profile_image} alt="Image Description" class="profile-image"></img>
    <h1 class="heading1">Hi There,I am Hanna Mary Siby</h1>
    <h2 class="heading2">Software Engineer</h2>
    </div>
  );
};
export default Carousels;
