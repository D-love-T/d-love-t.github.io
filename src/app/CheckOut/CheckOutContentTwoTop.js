import React, { Component } from 'react'

export default class CheckOutContentTwoTop extends Component {
  render() {
    let input=document.getElementsByClassName("form-control");
    console.log(input.value);
    console.log(input);
    return (
        <div className="form-billing">
        <div className="row">
          <div className="col-sm-6">
            <div className="billing-detail">
              <div className="title">Billing details</div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-item">
                    <label>First name</label>
                    <input type="text" name="first name" className="form-control"  placeholder={this.props.name}/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-item">
                    <label>Last name</label>
                    <input type="text" name="last name" className="form-control"  placeholder={this.props.name}/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-item">
                    <label>Email</label>
                    <input type="text" name="email" className="form-control" placeholder={this.props.mail} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-item">
                    <label>Phone</label>
                    <input type="text" name="phone" className="form-control" placeholder={this.props.phone} />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-item">
                    <label>Address</label>
                    <input type="text" name="address" className="form-control" placeholder={this.props.address}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="add-impormation">
              <div className="title">Additional Information</div>
              <form>
                <label htmlFor="exampletextarea">Order Note</label>
                <textarea id="exampletextarea" placeholder="Notes about your order" className="form-control" defaultValue={""} />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
