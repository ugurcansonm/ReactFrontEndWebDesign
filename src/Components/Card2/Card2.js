import React, { Component } from 'react';
import './card2.css';
import Button from 'react-bootstrap/Button';
import image6 from "../../images/hosting.png";
import image7 from "../../images/bulut.jpg";
import image8 from "../../images/web-design-agency.png";
import image9 from "../../images/web-sitesi-nasil-yapilir.jpg";



class Card2 extends Component {
  render() {
    return (
      <div className="cards2">
        {/* Birinci Üyelik */}
        <div className="ui card card2">
          <div className="ui slide masked reveal image">
            <img style={{ height: "320px" }} src={image6} className="visible content img2" />
            <img style={{ height: "320px" }} src={image9} className="hidden content img2" />
          </div>
          <div className="content">
            <a className="header">SIRIUS HOSTING</a>
            <div className="meta">
              <span className="date">Başlangıç Tarihi: 18.02.2020</span>
            </div>
          </div>
          <div className="extra content">
            <a>
              <Button variant="warning">Hizmet Süresini Uzat</Button>
            </a>
          </div>
        </div>

        {/* İkinci Üyelik */}
        <div className="ui card card2">
          <div className="ui slide masked reveal image">
            <img style={{ height: "320px" }} src={image7} className="visible content img2" />
            <img style={{ height: "320px" }} src={image9} className="hidden content img2" />
          </div>
          <div className="content">
            <a className="header">SIRIUS BULUT DEPOLAMA</a>
            <div className="meta">
              <span className="date">Başlangıç Tarihi: 18.02.2020</span>
            </div>
          </div>
          <div className="extra content">
            <a>
              <Button variant="warning">Hizmet Süresini Uzat</Button>
            </a>
          </div>
        </div>

        {/* Üçüncü Üyelik */}
        <div className="ui  card card2 ">
          <div className="ui slide masked reveal image">
            <img style={{ height: "320px" }} src={image8} className="visible content img2" />
            <img style={{ height: "320px" }} src={image9} className="hidden content img2" />
          </div>
          <div className="content">
            <a className="header">KURUMSAL WEB TASARIMI</a>
            <div className="meta">
              <span className="date">Başlangıç Tarihi: 18.02.2020</span>
            </div>
          </div>
          <div className="extra content">
            <a>
              <Button variant="warning">Hizmet Süresini Uzat</Button>
            </a>
          </div>
        </div>


      </div>

    )
  }
}
export default Card2;
