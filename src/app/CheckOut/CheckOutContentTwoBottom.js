import React, { Component } from 'react'

export default class CheckOutContentTwoBottom extends Component {
  render() {
    return (
        <div className="form-your-order">
        <div className="title">Your order</div>
        <div className="form-order">
          <div className="row line-1">
            <div className="col-sm-6">
              <p>Product</p>
            </div>
            <div className="col-sm-6">
              <p className="d-none d-sm-block">Total</p>
            </div>
          </div>
          <div className="row line-2">
            <div className="col-sm-6"><span className="anh"><img src={this.props.anh}/></span><span className="name">{this.props.tensanpham}</span><span className="size">Size</span></div>
            <div className="col-sm-6"><span className="price d-none d-sm-block">{this.props.gia}</span></div>
          </div>
          <div className="row line-3">
            <div className="col-sm-12">
              <div className="subtotal">
                <p>Subtotal :</p><span>{this.props.gia}</span>
              </div>
            </div>
          </div>
          <div className="row line-4">
            <div className="col-sm-12">
              <div className="subtotal">
                <p>Total :</p><span className="price">{this.props.gia}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
