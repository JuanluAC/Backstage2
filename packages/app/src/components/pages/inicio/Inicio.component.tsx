import React from 'react';
import Header from '../../common/Header';
import Sidebar from '../../common/Sidebar';
import Footer from '../../common/Footer';


function Inicio() {
  return (
    <div className="Inicio">
      <Header />
      <div style={{ display: 'flex'}}>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default Inicio;