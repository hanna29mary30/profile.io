import React, { useState, useEffect, createRef } from "react";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  activeArticle,
  i,
}) => {
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);
  

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
    <div
      ref={elRefs[i]}
      className={`card ${activeArticle === i ? "bg-light" : ""} mb-3`}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none text-dark"
      >
        <img
          src={
            urlToImage ||
            "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
          }
          alt={title}
          className="card-img-top"
          style={{ height: "200px" }}
        />
        <div className="card-body"  style={{ height: '350px' }}>
          <div className="row">
            <div className="col-6">
              <p className="card-text text-secondary">
                {new Date(publishedAt).toDateString()}
              </p>
            </div>
            <div className="col-6 text-end">
              <p className="card-text text-secondary">{source.name}</p>
            </div>
          </div>
          <h5 className="card-title mt-2">{title}</h5>

          <p className="card-text">{description}</p>
        </div>
      </a>
      <div className="card-footer d-flex justify-content-between align-items-center">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Learn More
        </a>
        <span className="text-secondary">{i + 1}</span>
      </div>
    </div>
  );
};

export default NewsCard;
