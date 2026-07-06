import React, { Component } from 'react';
import '../../App.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../../images/responsive.jpg";
import image2 from "../../images/techno.jpg";
import image3 from "../../images/code.jpg";
import Card from "../Cards/Card.js";
import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";


class Anasayfa extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <Navbar />
          <AliceCarousel autoPlay autoPlayInterval="3000">
            <img src={image1} className="sliderimg" />
            <img src={image2} className="sliderimg" />
            <img src={image3} className="sliderimg" />
          </AliceCarousel>
          <Card />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        < Footer />
      </div>

    )
  }
}
export default Anasayfa;
