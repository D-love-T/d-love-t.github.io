import React, { Component } from 'react'

export default class OurServicesContentThree extends Component {
  render() {
    return (
        <section className="content-three">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 order-1"><img src="images/52.png" className="img-fluid"  alt="..."  /></div>
            <div className="col-sm-7">
              <div className="content-text">
                <h2>Door Step Delivery</h2><img src="images/24.png"  alt="..." />
                <p>The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comfortable knew it was much more than a hunch the first mate.</p>
              </div>
              <div className="content-order"><a href="menu.html">
                  <button className="btn btn-orange">order online</button></a>
                <p>(OR)</p>
                <p className="call">ORDER THROUGH ONE CALL:<span>(04) 36.666.888</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
