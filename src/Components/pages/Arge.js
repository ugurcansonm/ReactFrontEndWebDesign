import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";
import "./arge.css";
import image5 from "../../images/CPM-AR-GE-Yönetimi.jpg";



class Arge extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <img className="img" src={image5} alt="" />
        <div className="all2">
          <div className="all">
            <h4 className="baslik">Kestirimci Bakım (Predictive Maintenance)</h4>
            <br />
            <p className="metin">
              Birçok endüstriyel tesiste her tip ve boyutta çok sayıda elektrik motoru kullanılır. Bu motorlar işletimleri sırasında elektriksel, mekaniksel, termal ve çevresel birçok zorlanmalara maruz kalarak beklenmedik bir şekilde bozulurlar ve sistem arızasına yol açarlar. Sistemde ani kesilmelerin önlenmesi ve güvenirliği arttırmak amacıyla işletmelerde bakım planlaması yapılır. Bu planlamada arıza sonrası bakım ve periyodik bakımın yanı sıra, bu motorların durumunun izlenmesi sonucunda referans duruma göre olabilecek değişiklikler gözlenir ve gerekli önlemler alınır. Bu amaçla son senelerde Kestirimci Bakım (Predictive Maintenance) programları geliştirilmiştir.</p>
          </div>

          <div className="all">
            <h4 className="baslik">Machinery Health Management
            (Makine Sağlığı Yönetimi)</h4>
            <br />
            <p className="metin">
              Bir makinenin sağlık yönetimi, uygun bakım işlemlerinin yapılması, teşhis ve prognostik, mevcut kaynaklar ve operasyonel talebin çıktılarına dayalı zamanında doğru lojistik kararlar alma sürecidir. Bu yönetim ile arızaların etkisini değerlendirmeye ve bakım yönetimi ile etki ve kayıpları en aza indirmeye odaklanmaktadır. Bu süreçte, prognostik ve sağlık yönetimi, kullanıcılara bir makinenin veya genel bir sistemin sağlık durumunun bütünleşik bir görünümünü sağlamayı amaçlamaktadır.</p>
          </div>

        </div>

        < Footer />
      </div>
    )
  }
}
export default Arge;
