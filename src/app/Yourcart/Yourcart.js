import React, { Component } from 'react'
import ContentOne from '../common/ContentOne';
import Dl from '../menu/Dulieu.json';
import YourCartContentTwo from './YourCartContentTwo';
export default class Yourcart extends Component {
  render() {
    return (
      <main>
        <ContentOne chinh="Your Cart" phu=" Menu" tieudephu="your cart" ></ContentOne>
        <section>
            {
                Dl.map((value,key)=>{
                   
                    if(value.id === parseInt(this.props.match.params.id)){
                        return(
                            <YourCartContentTwo key={key} tinId={value.id} anh={value.anh} tieude={value.noiDung} gia={value.gia} tensanpham={value.tensanpham}></YourCartContentTwo>
                        )
                              
                    }
                    else{
                          return true;
                    }
                  })
               
            }
        </section>
      </main>
    )
  }
}
