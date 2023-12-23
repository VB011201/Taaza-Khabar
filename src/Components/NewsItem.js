import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, detailUrl } = this.props;
    return (
      <div className="card" style={{ width: "30rem" }}>
        <img src={imageUrl?imageUrl:"https://guwahatiplus.com/public/web/images/default-news.png"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title?title:"..."}</h5>
          <p className="card-text">{description?description:"..."}</p>
          <a href={detailUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
