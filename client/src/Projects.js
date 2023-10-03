import React from "react";
import post1 from "./images/post1.jpg";
import post2 from "./images/post2.jpg";

const cardStyle = {
  height: "100%",
};

const imageStyle = {
  height: "200px",
  objectFit: "cover",
};

const Projects = () => {
  return (
    <div>
      <h3 className="mt-5 text-center dark">
        <strong>Projects</strong>
      </h3>
      <main className="my-5 bg-light">
        <div className="container">
          <section className="text-center">
            <div className="row">
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card border-dark" style={cardStyle}>
                  <div>
                    <img src={post1} style={imageStyle} />

                    <div
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      className="mask"
                    ></div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      Multiple Image Steganography using deep Neural Network
                    </h5>
                    <p className="card-text">
                      Multiple Image Steganography using deep Neural Network
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card border-dark" style={cardStyle}>
                  <div
                    className="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img src={post2} style={imageStyle} />
                    <a href="#!">
                      <div
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                        className="mask"
                      ></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      Collaborative Filtering Movie Recommendation
                    </h5>
                    <p className="card-text">
                      Collaborative Filtering Movie Recommendation using Machine
                      Learning Algorithm ,KNN etc..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Projects;
