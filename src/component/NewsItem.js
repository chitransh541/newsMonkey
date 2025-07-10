// NewsItem.js
import React, { Component } from 'react';

class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img 
            src={imageUrl || "https://via.placeholder.com/150"} 
            className="card-img-top img-fluid" 
            style={{ maxHeight: "200px", objectFit: "cover" }} 
            alt="News" 
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a 
              href={newsUrl || "#"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-dark btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
