import React, { Component } from 'react'
import OurMenuListCenter from './OurMenuListCenter';

export default class OurMenu extends Component {
  constructor(props){
    super(props);
    this.state={
      monan:'mon1'
    }

  }
  ShowMonan =(event) => {
   let tenmon= event.currentTarget.getAttribute('data-option');
   console.log(tenmon);
   this.setState({
     monan:tenmon
   })
  }
  render() {
    return (
        <section className="our-menu main_one">
        <div className="container">
          <div className="our-menu-text">
            <h2>Fresh From FamilyPizza</h2><span>our menu</span><img src="images/11.png"  alt="..."  />
            <p>The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his<br />  Skipper too will do their comfortable.</p>
          </div>
          <div className="list-dish">
            <div className="row">
              <div className="col-xs-6 col-sm-3 trai">
                <div className="list-dish-left">
                  <div data-option="mon1" onClick={(event)=>this.ShowMonan(event)} className="dish-item"><img src="images/33.png" alt="..."  /><span>burrata</span></div>
                  <div data-option="mon2" onClick={(event)=>this.ShowMonan(event)}  className="dish-item sale"><img src="images/28.png"  alt="..."  /><span>calzone</span></div>
                  <div data-option="mon3" onClick={(event)=>this.ShowMonan(event)} className="dish-item"><img src="images/29.png"   alt="..." /><span>GLUTE-FREE PIZZA</span></div>
                </div>
              </div>
           
              <OurMenuListCenter monan={this.state.monan}></OurMenuListCenter>
              
              <div className="col-xs-6 col-sm-3 phai">
                <div className="list-dish-right">
                  <div data-option="mon4" onClick={(event)=>this.ShowMonan(event)}  className="dish-item"><img src="images/30.png"  alt="..." /><span>GLUTEN-FREE PASTA</span></div>
                  <div data-option="mon5" onClick={(event)=>this.ShowMonan(event)} className="dish-item"><img src="images/32.png" alt="..."  /><span>MOZARELLA</span></div>
                  <div data-option="mon6" onClick={(event)=>this.ShowMonan(event)} className="dish-item"><img src="images/31.png" alt="..." /><span>QUATTRO FORMAGGI</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
  }
}
