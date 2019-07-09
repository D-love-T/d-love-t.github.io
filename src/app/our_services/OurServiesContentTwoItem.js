import React, { Component } from 'react'

export default class OurServiesContentTwoItem extends Component {
  render() {
    return (
        <div className={this.props.tenclass}><i className={this.props.classicon} />
        <h6>{this.props.title}</h6>
        <p>The one day when lady met fellow and they knew it was much more than a hunch the first mate and his Skipper.</p>
      </div>
    )
  }
}
