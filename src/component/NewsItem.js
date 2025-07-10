import React, { Component } from 'react';

class NewsItem extends Component {
  render() {
    let {
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
            style={{ maxHeight: "200px", objectFit: "cover" }}
            alt="News"
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
