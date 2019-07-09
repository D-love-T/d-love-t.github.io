import React, { Component } from 'react'
import OurBlogContentTwoLeft from './OurBlogContentTwoLeft';
import OurBlogContentTwoRight from './OurBlogContentTwoRight/OurBlogContentTwoRight';

export default class OurBlogContentTwo extends Component {
  render() {
    return (
       
        <section className="content-two">
          <div className="container">
            <div className="row">
             <OurBlogContentTwoLeft></OurBlogContentTwoLeft>
             <OurBlogContentTwoRight></OurBlogContentTwoRight>
             
            </div>
          </div>
        </section>

      
    )
  }
}
