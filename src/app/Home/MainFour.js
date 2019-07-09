import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class MainFour extends Component {
    constructor(props){
        super(props);
        this.state={
            id:"",
            name:"",
            mail:"",
            address:"",
            phone:""
        }
    }
    isChangeFrom=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        this.setState({
            [name]:value
        })

    }
    render() {
        return (
            <section className="main_four">
                <div className="main_four-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-xs-12">
                                <div className="main_four-text">
                                    <h5>Make Your Order</h5>
                                    <h6> BOOK ONLINE</h6><img src="images/19.png" alt="..."/>
                                    <p>The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comfortable knew it was much more than a hunch the first mate.</p>
                                    <div className="hotline">
                                        <p>hotline</p><a href="index.html"><i className="fa fa-phone" />(04) 36.666.888</a>
                                    </div>
                                    <p className="bold"> * FREE DELIVERY WITHIN 10KM DISTANCE</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xs-12">
                                <div className="order-form">
                                    <h2> FILL THE ORDER</h2>
                                    <div className="bg-yellow" />
                                    <div className="bg-black1" />
                                    <div className="form-order">
                                        <input onChange={(event)=>this.isChangeFrom(event)} type="text" name="name" placeholder="YOUR NAME*" className="your-name" />
                                        <input onChange={(event)=>this.isChangeFrom(event)} type="text" name="mail" placeholder="YOUR MAIL*" className="your-mail" />
                                        <input onChange={(event)=>this.isChangeFrom(event)} type="text" name="phone"  placeholder="YOUR PHONE NUMBER*" className="your-phone" />
                                        <input onChange={(event)=>this.isChangeFrom(event)} type="text" name="address"  placeholder="YOUR ADDRESS*" className="your-adddress" />
                                        <Link to="/Menu"> <button className="btn btn-order_now" onClick={(name,mail,phone,address)=>this.props.add(this.state.name,this.state.mail,this.state.phone,this.state.address)}>order-now</button></Link>

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
