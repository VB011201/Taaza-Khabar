import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, detailUrl, dateTime, author,source } =
      this.props;
    return (
      <div className="card" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left:"80%" , zIndex:'1'}}>
          {source}
        </span>
        <img style={{height:"20rem"}}
          src={
            imageUrl
              ? imageUrl
              : "https://guwahatiplus.com/public/web/images/default-news.png"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body d-flex flex-column">
          <small className="text-muted">
            Author:{author ? author : "unknown"}
          </small>
          <h5 className="card-title">{title ? title : "..."}</h5>
          <p className="card-text">{description ? description : "..."}</p>
          <span className="mt-auto">
            <a
              href={detailUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark mx-2"
            >
              Read More
            </a>
            <small className="text-muted">
              {new Date(dateTime).toUTCString()}
            </small>
          </span>
        </div>
      </div>
    );
  }
}

export default NewsItem;
