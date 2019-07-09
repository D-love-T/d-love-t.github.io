import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class ProductContentTwoTop extends Component {
  chuyenDoiURL=(str)=>{
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
   
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');

    return str;
}

  render() {
    console.log(this.props)
    return (
        <div className="content-two_top">
        <div className="row">
            <div className="col-sm-6">
              <div className="content-img"><img src={process.env.PUBLIC_URL + this.props.anh} alt="..." /></div>
            </div>
            <div className="col-sm-6">
              <div className="content-text">
                <h2>{this.props.tensanpham}</h2>
                <div className="price-color">{this.props.gia}</div>
                <p className="d-none d-sm-block">    Integer vitae enim vel nisi feugiat ultricies. Phasellus hendrerit pharetra posuere. In hac habitasse platea dictumst. Integer diam nulla, condimentum sit amet pretium id, lobortis vel tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam id.</p>
                <form className="choose-size">
                <label>Size</label>
                <select>
                    <option>choose an option</option>
                    <option>large</option>
                    <option>medium</option>
                    <option>small</option>
                </select>
                </form>
                <form className="choose-amount">
                <label>Quanlity</label>
                <input type="number" name="quanlity" min={1} max={50} defaultValue={1} />
                </form>
                <Link  to={"/Checkout/"+ this.props.danhmuc +"-"  + this.chuyenDoiURL(this.props.tensanpham)+ "." + this.props.tinId + "." + "html"}><button className="btn-orange">add to cart</button></Link>
               
            </div>
            </div>
        </div>
        </div>
    )
  }
}
