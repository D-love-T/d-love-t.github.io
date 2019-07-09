import React, { Component } from 'react'
import  DrinkItem from './DrinkItem';
import DishItem from '../DishPizzas/DishItem';
import Dl from '../Dulieu.json';
export default class Drink extends Component {
  render() {
    return (
        <div id="drink" className="product-item">
        <div className="row">
            {
                Dl.map((value,key)  => {
                    if(value.danhMuc===this.props.sanpham1){
                        if(this.props.sanpham1==="drink"){
                            return(
                                <DrinkItem key={key} tinId={value.id} danhmuc={value.danhMuc}  anh={value.anh} tieude={value.noiDung} gia={value.gia} tensanpham={value.tensanpham}></DrinkItem>
                            )
                        }
                        else{
                            return(
                                <DishItem key={key} tinId={value.id}  danhmuc={value.danhMuc} anh={value.anh} tieude={value.noiDung} gia={value.gia} tensanpham={value.tensanpham}></DishItem>
                            )
                        }
                        
                    }
                })
            }
        </div> 
    </div>
    )
  }
}
