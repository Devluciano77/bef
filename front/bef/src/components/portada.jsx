import React from 'react';
import imagenPort from '../images/port 2 be.jpg';
import '../styles/portada.css';

const Portada = () => {
  return (
    <div className="portada-container">
      <img src={imagenPort} id='imagenGradient' className='img-fluid' alt="portada" />
      <button className="btn btn-outline-success centered-button" type="button">Recerva tu anticipada</button>
    </div>
  );
}

export default Portada;
