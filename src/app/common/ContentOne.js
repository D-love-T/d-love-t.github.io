import React, { Component } from 'react'

export default class ContentOne extends Component {
  render() {
    return (
        <section className="content-one">
        <div className="container">
            <div className="content-text">
            <h2> {this.props.chinh}</h2>
            <a href>{this.props.phu}</a>
            <span>{this.props.tieudephu}</span>
            </div>
        </div>
        </section>
    )
  }
}
