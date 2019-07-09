import React, { Component } from 'react'
import ListDish from './ListDish';

export default class ContentTwo extends Component {
  constructor(props) {
    super(props);
    this.state={
     data:'pizza'
    }
  }
  showSanPham1 =(event) => {
    let sanpham = event.currentTarget.getAttribute('data-option'); 
    let addClass=document.querySelectorAll(".list-button ul li");
    for (var i = 0; i < addClass.length; i++) {
      addClass[i].classList.remove('active')
    }
    event.currentTarget.classList.add("active");
    this.setState({
      data:sanpham
    }); 
  }
  render() {
    return (
        <section className="main-content">
        <div className="container">
          <div className="content-text">
            <h2>Featured Dishes</h2><img src="images/41.png"  alt="..." />
          </div>
          <div className="list-button">
            <ul>
              <li data-option="pizza" onClick={(event)=> this.showSanPham1(event)} className="active"><a href className="btn-pizzas">Pizzas</a></li>
              <li data-option="pasta" onClick={(event)=> this.showSanPham1(event)} ><a href className="btn-pasta">Pasta</a></li>
              <li data-option="salad" onClick={(event)=> this.showSanPham1(event)} ><a href className="btn-salads">Salads</a></li>
              <li data-option="drink"onClick={(event)=> this.showSanPham1(event)} ><a href className="btn-dribks">Drinks</a></li>
            </ul>
          </div>
          <ListDish
          sanpham1 = {this.state.data}
          ></ListDish>
        </div>
      </section>
      
    )
  }
}
