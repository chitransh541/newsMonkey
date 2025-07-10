import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      pageSize: 9, // added for clarity
    };
  }

  async componentDidMount() {
    this.fetchNews(this.state.page);
  }

  fetchNews = async (page) => {
    const { pageSize } = this.state;
    let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&page=${page}&apiKey=567ada2a87014470bb176da498927167&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: page,
    });
  };

  handlePrevclick = () => {
    if (this.state.page > 1) {
      this.fetchNews(this.state.page - 1);
    }
  };

  handleNextClick = () => {
    const maxPages = Math.ceil(this.state.totalResults / this.state.pageSize);
    if (this.state.page < maxPages) {
      this.fetchNews(this.state.page + 1);
    }
  };

  render() {
    const { articles, page, totalResults, pageSize } = this.state;
    const maxPages = Math.ceil(totalResults / pageSize);

    return (
      <div className="container my-3">
            <h2 className={`mb-4 text-${this.props.mode === 'light' ? 'dark' : 'light'}`}>
      NewsMonkey - Top Headlines
    </h2>

        <div className="row">
          {articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : ''}
                description={element.description ? element.description.slice(0, 88) : ''}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between my-4">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevclick}
          >
            &larr; Previous
          </button>
          <button
            disabled={page >= maxPages}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
