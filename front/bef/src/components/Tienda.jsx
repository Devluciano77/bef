import React from 'react';
import Fond from '../images/fond.jpg'
import '../styles/Evento.css';
import Footer from "./footer";

const Tienda = () => {
  return (
    <>
      <div>
      <img src={Fond} className="img-fluid position-fixed" alt="portada"></img>
        <div className="card-img-overlay">
            <br />
            <br />
          <h1 className="mt-5 mb-5">TIENDA EN DESARROLLO</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Footer />
        </div>
      </div>
    </>

  );
}

export default Tienda;