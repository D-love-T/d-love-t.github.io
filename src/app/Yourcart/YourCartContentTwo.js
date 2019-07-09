import React, { Component } from 'react'
import {Link} from "react-router-dom";
export default class YourCartContentTwo extends Component {
  render() {
    return (
        <div className="sum-product">
        <div className="container">
            <div className="row">
            <div className="col-sm-10 offset-sm-1">
                <div className="table">
                <div className="row">
                    <div className="col-sm-4 table-item">
                    <div className="title" />
                    <div className="images"><i className="fa fa-times" /><img src={this.props.anh} alt="..."/></div>
                    </div>
                    <div className="col-sm-2 table-item">
                    <div className="title">Product</div>
                    <div className="text">
                        <p className="bold">{this.props.tensanpham}</p>
                        <p className="size">Size:<span>lagre</span></p>
                    </div>
                    </div>
                    <div className="col-sm-2 table-item">
                    <div className="title">Price</div>
                    <div className="text">
                        <p>{this.props.gia}</p>
                    </div>
                    </div>
                    <div className="col-sm-2 table-item">
                    <div className="title">Quanlity</div>
                    <div className="text">
                        <p className="quanlity">1</p>
                    </div>
                    </div>
                    <div className="col-sm-2 table-item">
                    <div className="title">Total</div>
                    <div className="text">
                        <p>{this.props.gia}</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="table-title"> Cart Totals</div>
            </div>
            <div className="col-sm-4 offset-sm-7">
                <table className="table-1">
                <tbody><tr>
                    <th>Subotal</th>
                    <td>{this.props.gia}</td>
                    </tr>
                    <tr>
                    <th>Total</th>
                    <td><span>{this.props.gia}</span></td>
                    </tr>
                </tbody></table>
            </div>
            <div className="button-group">
                <Link to="/Menu" className="return-menu">
                    <button className="btn btn-orange">return to menu</button>
                </Link>
                <a href>
                    <button className="btn btn-orange">proced to checkout</button>
                </a>
            </div>
            </div>
        </div>
        </div>

    )
  }
}
