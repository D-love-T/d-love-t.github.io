import React, { Component } from 'react'
import ProductContentTwoTop from './ProductContentTwoTop';
import Dl from '../menu/Dulieu.json';
import ProductContentTwoBottom from './ProductContentTwoBottom';
import ContentOne from './../common/ContentOne';
export default class ProductDetail extends Component {
  render() {
    var dem = 0;
    console.log(this.props.match.params.danhmuc);
    return (
      <main>
       <ContentOne chinh="about us" phu="Menu"  tieudephu="Product"></ContentOne>
        <section className="content-two">
          <div className="container">
            {
                Dl.map((value,key) =>{
                          
                    if(value.id === parseInt(this.props.match.params.id)){
                        return (
                          <ProductContentTwoTop danhmuc={value.danhMuc} key={key} tinId={value.id} anh={value.anh} tieude={value.noiDung} gia={value.gia} tensanpham={value.tensanpham}></ProductContentTwoTop>
                        )
                    }
                    else{
                          return true;
                    }
                  })
            }

              <div className="content-two-bottom">
              <h5>Sản phẩm li</h5><img src="../images/41.png"  alt="..." />
              <div className="related-product">
                <div className="row">
                  
                {
                    Dl.map((value,key) => {
                      if(value.id !== parseInt(this.props.match.params.id)){
                          if(value.danhMuc===this.props.match.params.danhmuc){
                            if(dem<=3){
                                dem++;
                                return(
                                    <ProductContentTwoBottom danhmuc={value.danhMuc} key={key} tinId={value.id} anh={value.anh} tieude={value.noiDung} gia={value.gia} tensanpham={value.tensanpham}></ProductContentTwoBottom>
                                )
                            }

                          }
                        }
                            
                        else{
                          return true;
                        }
                            
                              
                      })
                }
                  
                </div>
              </div>
            </div>
          </div>
      </section>
      
      </main>
    )
  }
}
