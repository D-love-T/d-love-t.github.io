import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Header extends Component {
  render() {
   
    return (
      
        <header className="header">
        <div className="container">
          <div className="header-top">
            <div className="d-none d-sm-block header-top-left">
              <p><i className="fa fa-phone" /><a href><span>Call at:</span>(03) 49.657.827</a></p>
              <p><i className="fa fa-envelope-o" /><a href><span>Mail at:</span>dattrang1412@gmail.com</a></p>
            </div><a href className="header-btn d-block d-sm-none"><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></a>
            <div className="header-logo"><img src={process.env.PUBLIC_URL + '../images/logo1.png'} alt="..."/></div>
            <div className="d-none d-sm-block header-top-right">
              <div className="top-icon"><i className="fa fa-facebook" /><i className="fa fa-twitter" /><i className="fa fa-google-plus" /><i className="fa fa-instagram" /></div>
              <Link to="/Menu"><button className="btn btn-order">Order online</button></Link>
            </div>
          </div>
        </div>
      </header>
   
      
    )
  }
}
