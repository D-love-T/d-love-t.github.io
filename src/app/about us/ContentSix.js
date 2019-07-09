import React, { Component } from 'react'

export default class ContentSix extends Component {
  render() {
    return (
      <section className="content-six">
  <div className="content-six-content">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-xs-12">
          <div className="order-form">
            <h2> FILL THE ORDER</h2>
            <div className="bg-yellow" />
            <div className="bg-black1" />
            <div className="form-order">
              <input type="text" placeholder="YOUR NAME*" className="your-name" />
              <input type="text" placeholder="YOUR MAIL*" className="your-mail" />
              <input type="text" placeholder="YOUR PHONE NUMBER*" className="your-phone" />
              <input type="text" placeholder="YOUR ADDRESS*" className="your-adddress" />
              <button className="btn btn-order_now">order-now</button>
            </div>
          </div>
        </div>
        <div className="col-sm-5 offset-sm-1 col-xs-12">
          <div className="content-six-text">
            <h2>Our Fun Facts</h2><img src="images/41.png"  alt="..."/>
            <p>The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comfortable.</p>
            <div className="impormation_group-content">
              <div className="impormation_group">
                <div className="impormation-item"><i className="fa fa-coffee" /><span>825</span>
                  <p>coffee cups</p>
                </div>
                <div className="impormation-item"><i className="fa fa-user" /><span>1500</span>
                  <p>happy clients</p>
                </div>
              </div>
              <div className="impormation_group">
                <div className="impormation-item"><i className="fa fa-trophy" /><span>20</span>
                  <p>awards</p>
                </div>
                <div className="impormation-item"><i className="fa fa-home" /><span>75</span>
                  <p>branches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
  }
}
