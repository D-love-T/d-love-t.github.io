import React, { Component } from 'react'
import OurMenu from './../Home/OurMenu/OurMenu';
import OurServicesContentTwo from './OurServicesContentTwo';
import OurServicesContentThree from './OurServicesContentThree';
import FeelBack from '../Home/FeelBack';
import OurServicesContentFour from './OurServicesContentFour';
import ContentOne from './../common/ContentOne';

export default class OurServices extends Component {
  render() {
    return (
      <main>
       <ContentOne chinh="about us" phu="Home"  tieudephu="Services"></ContentOne>
      <OurServicesContentTwo></OurServicesContentTwo>
      <OurServicesContentThree></OurServicesContentThree>
      <OurMenu></OurMenu>
      <FeelBack></FeelBack>
      <OurServicesContentFour></OurServicesContentFour>
    </main>
    
    )
  }
}
