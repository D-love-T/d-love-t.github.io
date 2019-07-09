import React, { Component } from 'react'

import ContentTwo from './ContentTwo';
import ContentOne from './../common/ContentOne';
export default class Menu extends Component {
  render() {
    return (
      <main>
      <ContentOne chinh="about us" phu="Home"  tieudephu="Menu"></ContentOne>
        <ContentTwo></ContentTwo>
      </main>
    )
  }
}
