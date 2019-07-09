import React, { Component } from 'react'
import {  Route } from "react-router-dom";
import Home from '../app/Home/HomeComponent';
import AboutUs from '../app/about us/AboutUs';
import Menu from '../app/menu/Menu';
import ProductDetail from '../app/ProductDetail/ProductDetail';
import OurServices from '../app/our_services/OurServices';
import OurBlog from '../app/our_blog/OurBlog';
import CheckOut from '../app/CheckOut/CheckOut';
import Yourcart from '../app/Yourcart/Yourcart';

export default class Dieuhuong extends Component {
  render() {
    return (
      <div>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/About_Us" component={AboutUs} />
            <Route path="/Menu" component={Menu} />
            <Route exact path="/Our" component={OurServices} />
            <Route path="/Our_Blog" component={OurBlog}></Route>
            <Route path="/Checkout/:danhmuc-:slug.:id.html" component={CheckOut}></Route>
            <Route path="/Yourcart/:danhmuc-:slug.:id.html" component={Yourcart}></Route>
            <Route path="/Product_Detail/:danhmuc-:slug.:id.html" component={ProductDetail} />
            
      </div>
    )
  }
}
