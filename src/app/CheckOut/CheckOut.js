import React, { Component } from 'react'
import Dl from '../menu/Dulieu.json';
import CheckOutContentTwo from './CheckOutContentTwo.js';
import ContentOne from './../common/ContentOne';
export default class CheckOut extends Component {
  render() {
    console.log(this.props);
    
    return (
        <main>
          <ContentOne chinh="about us" phu="Menu"  tieudephu="CheckOut"></ContentOne>
           {
                Dl.map((value,key) =>{
                          
                    if(value.id === parseInt(this.props.match.params.id)){
                        return (
                          <CheckOutContentTwo key={key} tinId={value.id} anh={value.anh} tieude={value.noiDung} gia={value.gia} tensanpham={value.tensanpham}></CheckOutContentTwo>
                        )
                              
                    }
                    else{
                          return true;
                    }
                  })
            }
         
         
      </main>
      
    )
  }
}
