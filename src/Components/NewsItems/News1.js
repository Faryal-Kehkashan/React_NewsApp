import React, { Component } from "react";

export class news1 extends Component {
  render() {
    let {title, discription, url} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {discription}
            </p>
            <a href="/" className="btn btn-primary btn-xs">
              Open News
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default news1;
