import React, { Component } from 'react'
import OurBlogContentTwoLeftItem from './OurBlogContentTwoLeftItem';
import Dl1 from './DuLieuOurblog.json';
export default class OurBlogContentTwoLeft extends Component {
  render() {
    return (
        <div className="col-sm-8 order-xs-2">
            <div className="content-left">
            
            {
                Dl1.map((value,key)  => {
                    return(
                        <OurBlogContentTwoLeftItem key={key} anh={value.anh} tensanpham={value.tensanpham} noidung={value.noidung}  like={value.like} comment={value.comment} month={value.month} tendaubep={value.tendaubep}></OurBlogContentTwoLeftItem>
                    )
                })
            }
                <div className="list-page">
                    <ul>
                    <li><a href><i className="fa fa-angle-double-left" />PREV</a></li>
                    <li><a href>1</a></li>
                    <li className="active"><a href>2</a></li>
                    <li><a href>3</a></li>
                    <li><a href>NEXT<i className="fa fa-angle-double-right" /></a></li>
                    </ul>
                </div>
            </div>
         </div>
    )
  }
}
