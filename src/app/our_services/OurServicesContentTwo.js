import React, { Component } from 'react'
import OurServiesContentTwoItem from './OurServiesContentTwoItem';

export default class OurServicesContentTwo extends Component {
  render() {
    return (
        <section className="content-two">
        <div className="container">
          <div className="content-title text-center">
            <h5>Our Friendly Care</h5><span>SERVICES</span><img src="images/11.png" alt="..." />
          </div>
          <div className="content-service">
            <div className="row">
              <div className="col-sm-4 col-lg-3">
                <OurServiesContentTwoItem tenclass="left-item" classicon="fa fa-user" title="SMILING SERVICES"></OurServiesContentTwoItem>
                <OurServiesContentTwoItem tenclass="left-item" classicon="fa fa-check-square-o" title="BEST QUALITY"></OurServiesContentTwoItem>
                <OurServiesContentTwoItem tenclass="left-item" classicon="fa fa-cutlery" title="GLOBAL FLAVOURS"></OurServiesContentTwoItem>
                
              </div>
              <div className="col-sm-4 col-lg-6">
                <div className="images-item"><img src="images/51.png"  alt="..." /></div>
              </div>
              <div className="col-sm-4 col-lg-3">
               <OurServiesContentTwoItem tenclass="right-item" classicon="fa fa-users" title="GREAT ATMOSHPERE"></OurServiesContentTwoItem>
                <OurServiesContentTwoItem tenclass="right-item" classicon="fa fa-spoon" title="FRESHLY MADE"></OurServiesContentTwoItem>
                <OurServiesContentTwoItem tenclass="right-item" classicon="fa fa-tint" title="NATURAL INGREDIENTS"></OurServiesContentTwoItem>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
