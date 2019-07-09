import React, { Component } from 'react'
import Slider from "react-slick";
export default class ContentFive extends Component {
  render() {
    var settings = {
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
    };
    return (
      <section className="content-five">
      <div className="content-five-content">
        <div className="container">
          <div className="slick-img">
          <Slider {...settings}>
            <div className="img-item">
              <div className="img-item-content"><img src="images/36.png"  alt="..."/></div>
            </div>
            <div className="img-item">
              <div className="img-item-content"><img src="images/37.png" alt="..."/></div>
            </div>
            <div className="img-item">
              <div className="img-item-content"><img src="images/38.png" alt="..." /></div>
            </div>
            <div className="img-item">
              <div className="img-item-content"><img src="images/39.png" alt="..."/></div>
            </div>
            <div className="img-item">
              <div className="img-item-content"><img src="images/40.png" alt="..."/></div>
            </div>
            <div className="img-item">
              <div className="img-item-content"><img src="images/36.png" alt="..."/></div>
            </div>
            <div className="img-item">
              <div className="img-item-content"><img src="images/37.png" alt="..."/></div>
            </div>
            <div className="img-item">
              <div className="img-item-content"><img src="images/38.png" alt="..."/></div>
            </div>
            <div className="img-item">
              <div className="img-item-content"><img src="images/39.png" alt="..."/></div>
            </div>
            <div className="img-item">
              <div className="img-item-content"><img src="images/40.png" alt="..."/></div>
            </div>
            </Slider> 
          </div>
        </div>
      </div>
    </section>
    
    )
  }
}
