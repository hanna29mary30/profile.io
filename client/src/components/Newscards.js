import React from 'react';
import NewsCard from "./Newscard"
import "./NewsCards.css";

const NewsCards = ({ articles, activeArticle }) => {
  if (!articles.length) {
    return (
      <div className="container-fluid mt-4 ">
        <div className="row">
          <div className="col-md-6 background-container">
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <h1 className='display-4'><strong>NEWSAPP</strong></h1>
            </div>
          </div>
         
            <div className="col-sm-6 col-md-4 col-lg-3 m-3 ">
              <div className="alert alert-dark" role="alert">
                <h5 className="alert-heading">News by Sources</h5>
                <p className="mb-0">
                  <strong>Sources include</strong><br />
                  CNN, BBC-News, ABC-News, Buzzfeed, Time, Wired, etc.
                </p>
                <p className="mb-0">
                  <strong>Try saying:</strong><br />
                  <i>Give me the news from CNN</i>
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 m-3">
              <div className="alert alert-dark" role="alert">
                <h5 className="alert-heading">News by Category</h5>
                <p className="mb-0">
                  <strong>Category include</strong><br />
                  Business, Health, Science, Sports, Technology, Entertainment, General, etc.
                </p>
                <p className="mb-0">
                  <strong>Try saying:</strong><br />
                  <i>Whats the recent headlines in Science</i>
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 m-3">
              <div className="alert alert-dark" role="alert">
                <h5 className="alert-heading">News by Term</h5>
                <p className="mb-0">
                  <strong>Term like</strong><br />
                  India-canada, Corona, Smartphone, Bitcoin,Cricket,etc..
                </p>
                <p className="mb-0">
                  <strong>Try saying:</strong><br />
                  <i>What is new in Bitcoin</i>
                </p>
              </div>
            </div>
        </div>
        </div>
    
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {articles.map((article, i) => (
          <div key={article.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCards;
