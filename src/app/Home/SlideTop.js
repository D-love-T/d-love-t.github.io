import React, { Component } from 'react'

export default class SlideTop extends Component {
    render() {
        return (
            <section className="slide-top">
                <div id="carouselExampleControls" data-ride="carousel" data-interval="false" className="carousel slide">
                    <div role="listbox" className="carousel-inner">
                        <div className="carousel-item active"><img src="images/slide_1.jpg" alt="First slide" className="d-block w-100" />
                            <div className="carousel-item-text"><img src="images/10.png" alt="..." />
                                <h2>Pizza của chúng tôi được làm từ những nguyên liệu đặc biệt nhất</h2><img src="images/19.png"  alt="..." />
                                <p className="d-none d-sm-block">The one day when the lady met this fellow and they knew it was<br />                           much more than a hunch the first mate and his Skipper too will do<br />                       their comfortable knew it hunch the first mate.</p>
                                <div className="fa fa-arrow-down" />
                                <h5>SCROLL DOWN</h5>
                            </div>
                        </div>
                        <div className="carousel-item"><img src="images/slide_2.jpg" alt="Second slide" className="d-block w-100" />
                            <div className="carousel-item-text"><img src="images/10.png"  alt="..." />
                                <h2>Pizza của chúng tôi được làm từ những nguyên liệu đặc biệt nhất</h2><img src="images/19.png"  alt="..."/>
                                <p className="d-none d-sm-block">The one day when the lady met this fellow and they knew it was<br />                           much more than a hunch the first mate and his Skipper too will do<br />                       their comfortable knew it hunch the first mate.
                                </p><div className="fa fa-arrow-down" />
                                <h5>SCROLL DOWN</h5>
                                <p />
                            </div>
                        </div>
                        <div className="carousel-item"><img src="images/slide_3.jpg" alt="Third slide" className="d-block w-100" />
                            <div className="carousel-item-text"><img src="images/10.png"  alt="..." />
                                <h2>Pizza của chúng tôi được làm từ những nguyên liệu đặc biệt nhất</h2><img src="images/19.png"  alt="..."/>
                                <p className="d-none d-sm-block">The one day when the lady met this fellow and they knew it was<br />                           much more than a hunch the first mate and his Skipper too will do<br />                       their comfortable knew it hunch the first mate.</p>
                                <div className="fa fa-arrow-down" />
                                <h5>SCROLL DOWN</h5>
                            </div>
                        </div>
                    </div><a href="#carouselExampleControls" role="button" data-slide="prev" className="carousel-control carousel-control-prev"><span aria-hidden="true" className="glyphicon glyphicon-chevron-left" /><span className="sr-only">Previous</span></a><a href="#carouselExampleControls" role="button" data-slide="next" className="carousel-control carousel-control-next"><span aria-hidden="true" className="glyphicon glyphicon-chevron-right" /><span className="sr-only">Next</span></a>
                </div>
            </section>

        )
    }
}
