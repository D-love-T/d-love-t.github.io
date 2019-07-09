import React, { Component } from 'react'

export default class OurBlogContentTwoLeftItem extends Component {
  render() {
    return (
        <div className="content-left-item"><a href><img src={this.props.anh}  alt="..." /></a>
        <div className="item-title">
          <div className="date">
            <h5>{this.props.month}</h5>
          </div>
          <div className="text">
            <h5><a href>{this.props.tensanpham}</a></h5><span>BY</span><a href className="other">{this.props.tendaubep}</a><a href className="other">{this.props.like} LIKES</a><a href className="other">{this.props.comment} COMMENTS</a>
          </div>
        </div>
        <p>{this.props.noidung}</p><a href="blog.html" className="read-more">
          <button className="btn btn-orange">read more</button></a>
      </div>
    )
  }
}
