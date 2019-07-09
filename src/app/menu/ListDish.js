import React, { Component } from 'react'
import Drink from './Drink/Drink';

export default class ListDish extends Component {
  render() {

    return (
        <div className="list-dish">
           <Drink sanpham1={this.props.sanpham1}></Drink>
        </div>
    )
  }
}
