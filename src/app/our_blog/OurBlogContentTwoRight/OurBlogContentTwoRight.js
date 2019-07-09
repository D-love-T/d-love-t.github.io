import React, { Component } from 'react'
import ContentTwoRightTitle from './ContentTwoRightTitle';
import CotentTwoRightDish from './CotentTwoRightDish';
import Dlp from './DulieuPost.json';
import ContentTwoRightListPost from './ContentTwoRightListPost';
export default class OurBlogContentTwoRight extends Component {
  render() {
    return (
        <div className="col-sm-4 padding-0">
        <div className="content-right">
         <ContentTwoRightTitle tieude="SEARCH KEYWORDS"></ContentTwoRightTitle>
          <div className="input-group margin-50">
            <input type="text" placeholder="Search here..." className="form-control" />
            <button className="btn btn-search"><i className="fa fa-search" /></button>
          </div>

          <ContentTwoRightTitle tieude="CATEGORIES"></ContentTwoRightTitle>

          <CotentTwoRightDish></CotentTwoRightDish>

          <ContentTwoRightTitle tieude="RECENT POST"></ContentTwoRightTitle>

          <div className="list-post margin-50">
           {
             Dlp.map((value,key)=>{
                return(
                  <ContentTwoRightListPost key={key} anh={value.anh} noidung={value.noidung} tacgia={value.tacgia} date={value.date}></ContentTwoRightListPost>
                )
             })
           }
           
          </div>
          <ContentTwoRightTitle tieude="VIDEO WIDGETS"></ContentTwoRightTitle>
          <div className="video-make-pizza margin-50"><iframe width="100%" height={250} src="https://www.youtube.com/embed/cktFEfXts24" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
         <ContentTwoRightTitle tieude="ARCHIVES"></ContentTwoRightTitle>
          <div className="list-dish">
            <ul>
              <li><a href><i className="fa fa-plus" />December 2016</a></li>
              <li><a href><i className="fa fa-plus" />January 2016</a></li>
              <li><a href><i className="fa fa-plus" />February 2016</a></li>
              <li><a href><i className="fa fa-plus" />March 2016</a></li>
              <li><a href><i className="fa fa-plus" />April 2016</a></li>
              <li><a href><i className="fa fa-plus" />May 2016</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
