import React, { Component } from 'react'


import ContentThree from './ContentThree';
import ContentFive from './ContentFive';
import ContentSix from './ContentSix';
import MainThree from '../Home/MainThree';
import MainFive from '../Home/MainFive';
import ContentOne from './../common/ContentOne';

export default class AboutUs extends Component {
  render() {
    return (
      <main>
       <ContentOne chinh="about us" phu="Home"  tieudephu="About us"></ContentOne>
        <MainThree></MainThree>
        <ContentThree></ContentThree>
        <MainFive></MainFive>
        <ContentFive></ContentFive>
        <ContentSix></ContentSix>
      </main>
    )
  }
}
