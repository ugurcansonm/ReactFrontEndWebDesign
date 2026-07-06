import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Anasayfa from "./Components/pages/Anasayfa.js";
import Hakkımızda from "./Components/pages/Hakkımızda.js";
import Arge from "./Components/pages/Arge.js";
import Üyelik from "./Components/pages/Üyelik.js";


export default function App() {
  return (
    <Router >
      <switch>
        <Route exact path="/" component={Anasayfa} />
        <Route path="/hakkımızda" component={Hakkımızda} />
        <Route path="/arge" component={Arge} />
        <Route path="/üyelik" component={Üyelik} />
      </switch>
    </Router>
  )
}

