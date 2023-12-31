import React from 'react';
import Fond from '../images/fond.jpg'
import '../styles/Evento.css';
import Foto5 from '../images/foto5.jpg'
import Footer from "./footer";

const Postales = () => {
  return (
    <div>
    <img src={Fond} className="img-fluid position-fixed" alt="portada"></img>

      <div className="card-img-overlay">
          <br />
          <br />
          <h1 className="mt-5">POSTALES EN DESARROLLO</h1>
          <div id="carouselExampleInterval" className="container carousel slide mt-5" style={{ maxWidth: '75%' }} data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={Foto5} className="d-block w-100" alt="foto"/>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={Foto5} className="d-block w-100" alt="foto"/>
              </div>
              <div className="carousel-item">
                <img src={Foto5} className="d-block w-100" alt="foto"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <Footer />
      </div>
   </div>
  );
}

export default Postales;