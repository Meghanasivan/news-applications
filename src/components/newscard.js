import React from "react";

function NewsCard({ title, description, url, imageUrl }) {
  return (
    <div className="card mb-3">
      {imageUrl && <img src={imageUrl} className="card-img-top" alt="news" />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
