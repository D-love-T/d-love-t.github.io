import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class DrinkItem extends Component {
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
   
    return (
        <div class="col-sm-3 col-xs-6">
            <div class="product">
                <a href=""><img src={this.props.anh} class="images-drink" alt="..."/><i class="fa fa-link"></i></a>
                <h5>{this.props.tensanpham}</h5>
                <p>{this.props.tieude}</p>
                <div class="price"> {this.props.gia} </div>
                <Link to={"/Product_Detail/"+ this.props.danhmuc +"-" + this.chuyenDoiURL(this.props.tensanpham)+ "." + this.props.tinId + "." + "html"}> <button className="btn btn-orange">buy now</button></Link>
            </div>
        </div>
    
    )
  }
}
