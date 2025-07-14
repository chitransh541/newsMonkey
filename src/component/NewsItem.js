// NewsItem.js
import React, { Component } from 'react';

class NewsItem extends Component {
  render() {
    // Destructure props with default values
    const {
      title = 'No Title Available',
      description = 'No description provided.',
      imageUrl = 'https://via.placeholder.com/150',
      newsUrl = '#',
    } = this.props;

    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={imageUrl}
            className="card-img-top img-fluid"
            alt="News"
            style={{ height: '200px', objectFit: 'cover' }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {title.length > 45 ? title.slice(0, 45) + '...' : title}
            </h5>
            <p className="card-text">
              {description.length > 88 ? description.slice(0, 88) + '...' : description}
            </p>
            <a
              href={newsUrl}
              className="btn btn-dark btn-sm"
              target="_blank"
              rel="noopener noreferrer"
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
