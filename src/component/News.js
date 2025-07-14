import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
  }

  async componentDidMount() {
    this.fetchNews(this.state.page);
  }

  fetchNews = async (page) => {
  try {
    this.setState({ loading: true });

    const url = `${this.props.apiUrl}&page=${page}&pageSize=${this.props.pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();

    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults || 0,
      page: page,
      loading: false,
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    this.setState({ loading: false });
  }
};


  handlePrevclick = () => {
    if (this.state.page > 1) {
      this.fetchNews(this.state.page - 1);
    }
  };

  handleNextClick = () => {
    const maxPages = Math.ceil(this.state.totalResults / this.props.pageSize);
    if (this.state.page < maxPages) {
      this.fetchNews(this.state.page + 1);
    }
  };

  render() {
    const { articles, page, totalResults, loading } = this.state;
    const maxPages = Math.ceil(totalResults / this.props.pageSize);

    return (
      <div className="container my-3">
        <h2 className={`mb-4 text-${this.props.mode === 'light' ? 'dark' : 'light'}`}>
          <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        </h2>

        {loading && <Spinner />} {/* ✅ Show spinner only when loading */}

        {!loading && (
          <>
            <div className="row">
              {articles && articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : 'No Title'}
                    description={element.description ? element.description.slice(0, 88) : 'No Description'}
                    imageUrl={element.urlToImage || 'https://via.placeholder.com/150'}
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
          </>
        )}
      </div>
    );
  }
}

export default News;
