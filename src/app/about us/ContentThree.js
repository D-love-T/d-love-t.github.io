import React, { Component } from 'react';
import Slider from "react-slick";

export default class ContentThree extends Component {
  render() {
    var settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <section className="content-three">
        <div className="content-three_bg">
          <div className="container">
            <div className="slick-content">
            <Slider {...settings}>
              <div className="slick-item"><img src="images/2.jpg" alt="..." />
                <div className="slick-item-text">
                  <p>The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta</p>
                  <div className="your-name">
                    <h5>MARK DEO</h5>
                    <h4> Founder,Timeday</h4>
                  </div>
                </div>
              </div>
              <div className="slick-item"><img src="images/1.jpg"  alt="..." />
                <div className="slick-item-text">
                  <p>The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta</p>
                  <div className="your-name">
                    <h5>LISA WISH</h5>
                    <h4> Founder,Timeday</h4>
                  </div>
                </div>
              </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      
    )
  }
}
