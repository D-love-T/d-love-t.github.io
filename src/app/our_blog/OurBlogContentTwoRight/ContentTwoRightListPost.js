import React, { Component } from 'react'

export default class ContentTwoRightListPost extends Component {
  render() {
    return (
        <div className="list-post-item"><a href className="item-img"><img src={this.props.anh} /></a>
        <div className="item-text"><a href>{this.props.noidung} </a>
          <div className="impormation-member"><span>By</span>
            <p className="name">{this.props.tacgia} </p>
            <p className="date">{this.props.date} ></p>
          </div>
        </div>
      </div>
    )
  }
}
