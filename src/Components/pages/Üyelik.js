import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";
import "./üyelik.css";
import posed from 'react-pose';
import Button from 'react-bootstrap/Button';
import Card2 from "../Card2/Card2.js";

const Box = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

class Üyelik extends Component {
  state = {
    visible: true
  }
  durumDegistir = (e) => {
    this.setState({
      durum: !this.state.durum
    })
  }
  render() {
    const { durum } = this.state;
    return (
      <div>
        <div>


          <Navbar />
          <div className="login">
            <h4 className="baslik">Lütfen Giriş Yapınız</h4>
            <br /><br />
            <input className="cann" type="text" placeholder="E-mail" />
            <br />
            <input className="cann" type="text" placeholder="Password" />
            <br /><br />
            <Button className="btn" variant="danger" onClick={this.durumDegistir}>Log-In</Button>

          </div>
          <Box pose={durum ? 'visible' : 'hidden'}>
            <br /><br />
            <h4 className="paket">MEVCUT PAKETLERİM</h4>
            <br />
            <br />
            < Card2 />
          </Box>
          <br />
          <br />
          <br />

          < Footer />

        </div>

      </div>
    )
  }
}
export default Üyelik;
