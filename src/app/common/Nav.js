import React, { Component } from 'react'
import { NavLink  } from "react-router-dom";
export default class Nav extends Component {
  
  render() {
    return (
        <section className="top-menu">
        <div className="container">
          <ul className="header-menu">
            <div className="nav-menu">
              
              <li><NavLink className="nav-link js-scroll-trigger" to="/home">Home</NavLink ></li>
              <li ><NavLink  className="nav-link js-scroll-trigger" to="/About_Us">About us</NavLink ></li>
              <li ><NavLink  className="nav-link js-scroll-trigger" to="/Menu">Menu</NavLink ></li>
              <li ><NavLink  className="nav-link js-scroll-trigger" to="/Our" > Our Services </ NavLink ></li>
              <li  ><NavLink  className="nav-link js-scroll-trigger" to="/Our_Blog" > Our Blog </ NavLink ></li>
              <li  ><a href="contact-us.html">Contact us</a></li>
            </div>
          </ul>
        </div>
      </section>
      
    )
  }
}
