import React from "react";
import "./newsItem.css";

function NewsItem({ article }) {
  const { title, description, url, urlToImage } = article;

  return (
    <div>
      {urlToImage && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail"/>
          </a>
      )}
      <span className="news">
        <h4>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h4>
        <p>{description}</p>
      </span>
    </div>
  );
}

export default NewsItem;
