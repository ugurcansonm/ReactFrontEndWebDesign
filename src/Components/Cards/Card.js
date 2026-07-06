import React, { Component } from 'react';
import './card.css';
import hiz1 from "../../images/bakim-min.png";
import hiz2 from "../../images/unnamed.png";
import hiz3 from "../../images/banner-software.jpg";
import Button from 'react-bootstrap/Button';



class Card extends Component {
  render() {
    return (
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img style={{ height: "350px" }} src={hiz1} />
          </div>
          <div className="content">
            <div className="header">Yazılım Hizmetleri</div>

            <div className="description">
              Özel sektör için süreç bazlı yazılım geliştirme hizmetlerinin yanı sıra güncel teknolojiyi temel alan web ve mobil uygulamalar geliştirmektedir.
          </div>
          </div>
          <div className="extra content">
            <span className="right floated">
              <Button variant="warning">Detay</Button>
            </span>

          </div>
        </div>
        <div className="card">
          <div className="image">
            <img style={{ height: "350px" }} src={hiz2} />
          </div>
          <div className="content">
            <div className="header">Güvenlik ve Bakım</div>

            <div className="description">
              Firmanızın sektörel bilişim gereksimleri ve i̇ş akışınız doğrultusunda vpn bulut sistemine entegre ederek merkez ofise bağlı şube veya mağazalarınız arasındaki ağ network sistemini kurmaktadır ayrıca şube veya mağaza arasında ağ network firewall (güvenlik duvarı) oluşturmanızı sağlayarak i̇şlem ve verilerinizin güvenliğinide sağlamaktadır.
          </div>
          </div>
          <div className="extra content">
            <span className="right floated">
              <Button variant="warning">Detay</Button>
            </span>

          </div>
        </div>
        <div className="card">
          <div className="image">
            <img style={{ height: "350px" }} src={hiz3} />
          </div>
          <div className="content">
            <div className="header">Ar-Ge</div>
            <div className="description">
              Teorik bilgisayar bilimleri alanında yeni teoremler ve algoritmalar geliştiren Ar-Ge çalışmaları ile beraber
              işletim sistemleri, programlama dilleri, veri yönetimi, iletişim yazılımları ve yazılım geliştirme araçları düzeyinde bilgi teknolojisinin geliştirilmesini içermektedir.

          </div>
          </div>
          <div className="extra content">
            <span className="right floated">
              <Button variant="warning">Detay</Button>
            </span>


          </div>
        </div>
      </div>
    )
  }
}
export default Card;

