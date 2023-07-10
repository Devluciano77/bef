import React from 'react';
import imagenPort from '../images/port 2 be.jpg';
import '../styles/portada.css';
import Cuenta from './CuentaRegresiva';
import Footer from "./footer";
import '../styles/cuenta.css'



const Portada = () => {
  return (
    <div className="portada-container">
      <img src={imagenPort} id='imagenGradient' className='img-fluid' alt="portada" />
      <button className="btn btn-outline-success centered-button" type="button">Reserva tu anticipada</button>
      <Cuenta />
      <Footer />
    </div>
  );
}

export default Portada;
