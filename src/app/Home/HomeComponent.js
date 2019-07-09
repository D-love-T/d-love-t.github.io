import React, { Component } from 'react';
import MainThree from "./MainThree";
import MainFour from "./MainFour";
import MainFive from "./MainFive";
import SlideTop from "./SlideTop";
import OurMenu from "./OurMenu/OurMenu";
import FeelBack from "./FeelBack";

import {openRotate} from "./redux/action";
import {connect} from "react-redux";


class HomeComponent extends Component {
    constructor(props){
        super(props);


    }
    open=()=>{
        this.props.dispatch(openRotate(false));
    }
    render() {

        return (
            <main>
                <SlideTop/>
                <OurMenu/>
                <FeelBack/>
                <MainThree></MainThree>
                <MainFour/>
                <MainFive/>
            </main>
        );
    }
}
export default  connect(state =>{
    return {

    }
})(HomeComponent);