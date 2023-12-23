import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      spinner: false,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=805e49bf6ffe44e3b79a98b2b59de878&page=${this.state.page}&pageSize=${pageSize}`;
    this.setState({
      spinner: true,
    });
    let art = await fetch(url);
    let parsedArt = await art.json();
    this.setState({
      articles: parsedArt.articles,
      totalData: parsedArt.totalResults,
      spinner: false,
    });
  }
  handleNextClick = async (category,pageSize,country) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=805e49bf6ffe44e3b79a98b2b59de878&page=${
      this.state.page + 1
    }&pageSize=${pageSize}`;
    this.setState({
      spinner: true,
    });
    let art = await fetch(url);
    let parsedArt = await art.json();
    this.setState({
      articles: parsedArt.articles,
      page: this.state.page + 1,
      spinner: false,
    });
  };
  handlePrevClick = async (category,pageSize,country) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=805e49bf6ffe44e3b79a98b2b59de878&page=${
      this.state.page - 1
    }&pageSize=${pageSize}`;
    this.setState({
      spinner: true,
    });
    let art = await fetch(url);
    let parsedArt = await art.json();
    this.setState({
      articles: parsedArt.articles,
      page: this.state.page - 1,
      spinner: false,
    });
  };
  render() {
    const {country,pageSize,category} = this.props.match.params;
    return (
      <>
        <div className="container my-3">
          {this.state.spinner && <Loading />}
          {!this.state.spinner && <> <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div
                key={element.url}
                className="col-lg-4 d-flex align-items-stretch my-3"
                >
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    detailUrl={element.url}
                    />
                </div>
              );
            })}
          </div>
          <div className="container my-3 d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1 ? true : false}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick(category,pageSize,country)}
              >
              &#8592; Previous
            </button>
            <button
              type="button"
              id="next"
              className="btn btn-dark"
              onClick={this.handleNextClick(category,pageSize,country)}
              disabled={
                Math.ceil(this.state.totalData / pageSize) < (this.state.page + 1)
              }
              >
              Next &#8594;
            </button>
          </div>
          </>}
        </div>
      </>
    );
  }
}

export default News;
