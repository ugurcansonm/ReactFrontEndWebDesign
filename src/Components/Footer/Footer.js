import React from 'react';
import "./footer.css";
import imagelogo from "../../images/logo.jpg";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column-1 */}
          <div className="col">
            <h4>İLETİŞİM</h4>
            <ul className="list-unstyled">
              <li>T: +90 312 299 2033</li>
              <li>Ankara/TÜRKİYE</li>
              <li>Hacettepe Teknokent</li>
            </ul>

          </div>
          {/* column-2 */}
          <div className="col"><ul className="list-unstyled"><img src={imagelogo} alt="" /></ul></div>

          {/* column-3 */}
          <div className="col col-3">
            <h4>MENÜ</h4>
            <div className="menu-footer">
              <a href="http://localhost:3000">Anasayfa</a>
              <a href="http://localhost:3000/hakkımızda">Hakkımızda</a>
              <a href="http://localhost:3000/üyelik">Üyelik</a>

            </div>


          </div>

        </div>
        <hr />
        <div className="row-1">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} SIRIUS SOFTWARE GROUP

  </p>

        </div>
      </div>

    </div>
  )
}
export default Footer;
