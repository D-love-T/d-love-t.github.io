
import React, { Component } from 'react'
import OurBlogContentTwo from './OurBlogContentTwo';
import ContentOne from './../common/ContentOne';
export default class OurBlog extends Component {
  render() {
    return (
        <main>
             <ContentOne chinh="about us" phu="Home"  tieudephu="About us"></ContentOne>
            <OurBlogContentTwo></OurBlogContentTwo>
        </main>


    )
  }
}