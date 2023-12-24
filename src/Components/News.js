import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import Header from "./Header";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      // spinner: true,
      totalData: 0,
    };
  }
  fetchMoreData = async (category, country, pageSize) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=805e49bf6ffe44e3b79a98b2b59de878&page=${this.state.page}&pageSize=${pageSize}`;
    let art = await fetch(url);
    let parsedArt = await art.json();
    this.setState({
      articles: this.state.articles.concat(parsedArt.articles),
      page: this.state.page + 1,
      totalData: parsedArt.totalResults,
    });
  };
  async componentDidMount() {
    const { country, pageSize, category, progress } = this.props;
    progress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=805e49bf6ffe44e3b79a98b2b59de878&page=${this.state.page}&pageSize=${pageSize}`;
    // this.setState({
    //   spinner: true,
    // });
    progress(30);
    let art = await fetch(url);
    let parsedArt = await art.json();
    progress(60);
    this.setState({
      articles: parsedArt.articles,
      totalData: parsedArt.totalResults,
      // spinner: false,
      page: this.state.page + 1,
    });
    progress(100);
  }
  // handleNextClick = async (category, country, pageSize,progress ) => {
  //   progress(10);
  //   let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=805e49bf6ffe44e3b79a98b2b59de878&page=${
  //     this.state.page + 1
  //   }&pageSize=${pageSize}`;
  //   this.setState({
  //     spinner: true,
  //   });
  //   progress(30);
  //   let art = await fetch(url);
  //   let parsedArt = await art.json();
  //   progress(60);
  //   this.setState({
  //     articles: parsedArt.articles,
  //     page: this.state.page + 1,
  //     spinner: false,
  //   });
  //   progress(100);
  // };
  // handlePrevClick = async (category, country, pageSize ,progress) => {
  //   progress(10);
  //   let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=805e49bf6ffe44e3b79a98b2b59de878&page=${
  //     this.state.page - 1
  //   }&pageSize=${pageSize}`;
  //   this.setState({
  //     spinner: true,
  //   });
  //   progress(30);
  //   let art = await fetch(url);
  //   let parsedArt = await art.json();
  //   progress(60);
  //   this.setState({
  //     articles: parsedArt.articles,
  //     page: this.state.page - 1,
  //     spinner: false,
  //   });
  //   progress(100);
  // };
  render() {
    const { country, pageSize, category, title } = this.props;
    return (
      <>
        <div className="container my-3">
          <Header title={title} />
          {/* {this.state.spinner && <Loading />} */}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            hasMore={this.state.articles.length !== this.state.totalData}
            next={() => this.fetchMoreData(category, country, pageSize)}
            loader={<Loading />}
          >
            <div className="container row">
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
                      dateTime={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
          {/* <div className="container my-3 d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1 ? true : false}
              type="button"
              className="btn btn-dark"
              onClick={() => this.handlePrevClick(category, country, pageSize,progress)}
              >
              &#8592; Previous
            </button>
            <button
              type="button"
              id="next"
              className="btn btn-dark"
              onClick={() => this.handleNextClick(category, country, pageSize,progress)}
              disabled={
                Math.ceil(this.state.totalData / pageSize) < (this.state.page + 1)
              }
              >
              Next &#8594;
            </button>
          </div> */}
        </div>
      </>
    );
  }
}

export default News;
