import React from 'react';

const NewsItem = ({ title, description, imgurl, newsurl, author, date }) => {
  return (
    <div>
      <div className="card">
        <img src={imgurl} className="card-img-top" alt="News" />
        <div className="card-body">
          <h5 className="card-title">{title}....<span className="badge bg-info text-dark">New</span></h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsurl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
