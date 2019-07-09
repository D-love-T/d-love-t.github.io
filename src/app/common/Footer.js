import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
  <div className="footer-one">
    <div className="container">
      <h2 className="title">SIGNUP TO OUR NEWSLETTER</h2>
      <div className="form-group">
        <input placeholder="Enter your email" className="enter-mail" />
        <button className="btn btn-subcribe">Subcribe</button>
      </div>
    </div>
  </div>
  <div className="footer-two">
    <div className="bg-black">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-sm-3 col-xs-12">
              <div className="footer-top-item"><a href className="logo-bottom"><img src={process.env.PUBLIC_URL + 'images/logo1.png'}   alt="..."  /></a>
                <p className="font-14">The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comfortable.</p>
                <button className="btn btn-locate">Locate us</button>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footer-top-item">
                <h5 className="title">Giờ Làm việc</h5><img src={process.env.PUBLIC_URL + 'images/24.png'}   alt="..." />
                <ul>
                  <li><a href>MON: 9.30AM TO 10.30PM</a></li>
                  <li><a href>TUE: 9.30AM TO 10.30PM</a></li>
                  <li><a href>WED: 9.30AM TO 10.30PM</a></li>
                  <li><a href>THU: 9.30AM TO 10.30PM</a></li>
                  <li><a href>FRI: 9.30AM TO 10.30PM</a></li>
                  <li><a href>SAT: CLOSED</a></li>
                  <li><a href>SUN: 9.30AM TO 10.30PM</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footer-top-item">
                <h5 className="title">MENU</h5><img src={process.env.PUBLIC_URL + 'images/24.png'}  alt="..."  />
                <ul>
                  <li><a href>About us</a></li>
                  <li><a href>Menu</a></li>
                  <li><a href>Services</a></li>
                  <li><a href>blog</a></li>
                  <li><a href>Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footer-top-item">
                <h5 className="title">ADDRESS</h5><img src={process.env.PUBLIC_URL + 'images/24.png'}  alt="..." />
                <p className="address">ADDRESS: 264, Bai Lam Thuong, Hong Quang , Ung Hoa, Ha Noi, Viet Nam</p>
                <p className="phone">Phone no:<a href>(03) 49.657.827</a><a href className="block">(+84) 169.9696.888</a></p>
                <div className="footer-item-icon"><i className="fa fa-facebook" /><i className="fa fa-twitter" /><i className="fa fa-google-plus" /><i className="fa fa-instagram" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Copyrights FamilyPizza 2017. All Rights Reserved</p>
          <div className="term"><a href className="border-right">Terms &amp; Condtions</a><a href>Pricacy Policy</a></div>
        </div>
      </div>
    </div>
  </div>
</footer>

      </div>
    )
  }
}
