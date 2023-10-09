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

const projectsData = [
  {
    title: "Multiple Image Steganography using deep Neural Network",
    description: "Multiple Image Steganography using deep Neural Network",
    image: post1,
  },
  {
    title: "Collaborative Filtering Movie Recommendation",
    description: "Collaborative Filtering Movie Recommendation using Machine Learning Algorithm, KNN etc..",
    image: post2,
  },
  {
    title: "Collaborative Filtering Movie Recommendation",
    description: "Collaborative Filtering Movie Recommendation using Machine Learning Algorithm, KNN etc..",
    image: post2,
  },
];

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
              {projectsData.map((project, index) => (
                <div className="col-lg-4 col-md-12 mb-4" key={index}>
                  <div className="card border-dark" style={cardStyle}>
                    <div>
                      <img src={project.image} style={imageStyle} />
                      <div
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                        className="mask"
                      ></div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Projects;
