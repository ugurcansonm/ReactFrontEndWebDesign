import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";
import "./hakkımızda.css";
import image6 from "../../images/hakkimizda-banner.png";


class Hakkımızda extends Component {

  render() {

    return (
      <div>

        <Navbar />
        <img className="img" src={image6} alt="" />

        <div className="kapsayici">
          <h1 className="baslik">Biz Kimiz?</h1>
          <hr />
          <p>
            SİRİUS, 2018 yılında PROMET Şirketler Topluluğu’nun Ar-Ge firması olarak kurulmuştur. SİRİUS, 2019 yılı itibari ile PROMET’ in sahip olduğu alan uzmanlığından da faydalanarak Hacetttepe Teknokentte Ar-Ge çalışmalarına ağırlık vermeye başlamıştır.
            SİRİUS, ISO/IEC TR15504 (SPICE 2 Organizasyonel Olgunluk Belgesi) standardını kullanarak ürettiği yazılım çözümleri ile katkı sağlamaktadır.
            </p>
          <h3>➤&nbsp;Çalışmalarımız</h3>
          <hr />
          <ol className="list">
            <li>Predictive Maintenance (Kestirimci Bakım)</li>
            <li>Machinery Health Management (Makine Sağlığı Yönetimi)</li>
            <li> KEYSİS (Kimlik Erişim Yönetimi Sistemi) Uygulamaları</li>
            <li> Malzeme Yönetimi Uygulamaları</li>
            <li> ERP Uygulamaları</li>
            <li>İnsan Kaynakları Uygulamaları</li>
          </ol>
        </div>

        < Footer />

      </div>
    )
  }
}
export default Hakkımızda;
