import React, { Component } from 'react';
import './App.css';
import './assets/css/index.css';
import './assets/css/about-us.css';
import './assets/css/menu.css';
import './assets/css/product-detail.css';
import './assets/css/our-services.css';
import './assets/css/our-blog.css';
import './assets/css/checkout.css';
import './assets/css/yourcart.css';
import Header from './app/common/Header';
import Nav from './app/common/Nav';
import Footer from './app/common/Footer';
import Dieuhuong from './router/Dieuhuong';
import { BrowserRouter as Router } from "react-router-dom";
import DlOrder from "./app/Home/DuLieuOder.json";
const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data: DlOrder,
    }
  }
  componentWillMount() {
    // kiem tra xem co localStorage nay chua
    if(localStorage.getItem('userInfo') === null){
      localStorage.setItem('userInfo',JSON.stringify(DlOrder));
    }
    else{
      var temp = JSON.parse(localStorage.getItem('userInfo'));
      this.setState({
        data:DlOrder
      })
    }
  }

  getNewInfo =(name,mail,phone,address) => {
    var item={}
    item.id=uuidv1();
    item.name=name;
    item.phone=phone;
    item.mail=mail;
    item.address=address;
    var items =this.state.data;
    items.push(item);
    this.setState({
      data:items
    })
    localStorage.setItem('userInfo',JSON.stringify(items));

  }
  render() {
    var  ketQua=[];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketQua.push(item);
      }
    });
    return (
        <Router>
          <div className="App">
            <Header></Header>
            <Nav></Nav>
            <Dieuhuong
                add={(name,phone,address,mail)=>this.getNewInfo(name,phone,address,mail)}
                dataInfo={ketQua}
            ></Dieuhuong>
            <Footer></Footer>
          </div>
        </Router>
    );
  }
}

export default App;
