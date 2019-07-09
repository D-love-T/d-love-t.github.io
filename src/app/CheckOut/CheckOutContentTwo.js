import React, { Component } from 'react'
import CheckOutContentTwoBottom from './CheckOutContentTwoBottom';
import CheckOutContentTwoTop from './CheckOutContentTwoTop';
import {Link} from 'react-router-dom';
import DlOder from './../Home/DuLieuOder.json'
export default class CheckOutContentTwo extends Component {
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
        <section className="content-two">
          <div className="container">
            {
              DlOder.map((value,key)=>{   
                  return(
                    <CheckOutContentTwoTop key={key} phone={value.phone} name={value.name} mail={value.mail} address={value.address}></CheckOutContentTwoTop>
                  )
               
              })
            }
           <CheckOutContentTwoBottom anh={this.props.anh} tieude={this.props.noiDung} gia={this.props.gia} tensanpham={this.props.tensanpham}></CheckOutContentTwoBottom>
            <Link to={"/Yourcart/"+ this.props.danhmuc +"-"  + this.chuyenDoiURL(this.props.tensanpham)+ "." + this.props.tinId + "." + "html"}>
              <button className="btn btn-orange">Place order</button>
            </Link>
          </div>
        </section>
        
    )
  }
}
