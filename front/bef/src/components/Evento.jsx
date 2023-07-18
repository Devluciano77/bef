import React from 'react';
import '../styles/Evento.css';
import Footer from "./footer";
import GoogleMap from './Map';
import Fond from '../images/fond.jpg'
import Foto2 from '../images/foto2.jpg'
import Cuenta from './CuentaRegresiva';

const Evento = () => {
  return (
    <>
        <div>
            <img src={Fond} className="img-fluid position-fixed" alt="portada"></img>

            <div className="card-img-overlay">
                <hr />
                <hr />
                <h1 className="mt-5">BIEN EXTREMO FEST</h1>
                <Cuenta />

                <div id="container-cards" className="container-fluid text-center" >

                    <div id='transparentCard' className="container container-fluid">
                        <div className="col">
                            <div className="card h-100 bg-transparent">
                                {/* <div className="inner"> 
                                    <img src={Foto2} className="card-img-top" alt="..."/>
                                </div> */}
                                <div className="card-body">
                                    {/* <h5 className="card-title">Nerium</h5> */}
                                    <p className="card-text text-light">El 3, 4 y 5 de Noviembre Hell  Heaven Open Air regresa a los verdes campos de Foro Pegaso <br />
                                    <br />
                                    Para esta nueva edición se tiene preparado uno de los line ups más ambiciosos en la historia de este festival, HH 23 inicia un viaje excepcional a través de los tiempos reuniendo grandes leyendas con las nuevas propuestas más sobresaliente del rock y metal actual, sumándole una gran variedad de atracciones, sin duda te harán vivir una experiencia distinta y memorable. </p>
                                </div>

                                <button className="btn btn-outline-success " type="button">Reserva tu anticipada</button>

                                <div className="card-footer">
                                {/* <small className="text-body-secondary">28 de junio</small> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <h1 className='text-light justify-content-center' >UBICACION</h1>
                        <GoogleMap />
                    </div>
                </div>
                <Footer />
            </div>
        </div>

      </>
  );
}

export default Evento;