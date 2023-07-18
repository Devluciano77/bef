import React from 'react';
import '../styles/Evento.css';
import Footer from "./footer";
import GoogleMap from './Map';
import Fond from '../images/fond.jpg'
import Foto6 from '../images/foto6.jpg'
import Foto2 from '../images/foto2.jpg'
import Cuenta from './CuentaRegresiva';

const Evento = () => {
  return (
    <>
        <div>
            <img src={Fond} className="img-fluid position-fixed" alt="portada"></img>

            <div className="card-img-overlay">
                <br />
                <br />
                {/* <h1 className="mt-5">BIEN EXTREMO FEST</h1> */}
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

                                <button className="btn btn-outline centered-button2 mx-auto mb-3" type="button">Reserva tu anticipada</button>
                            </div>
                        </div>
                    </div>
                    <div className='container mb-5'>
                        <h1 className='text-light justify-content-center mt-5 mb-3' >UBICACION</h1>
                        <GoogleMap />
                    </div>

                    <div className='container mb-5'>
                        <h1 className='text-light justify-content-center mt-5 mb-3' >TURISMO</h1>

                        <div id="carouselExampleDark" className="container carousel carousel-dark slide " style={{ maxWidth: '50%' }}>
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner bg-transparent">
                                <div className="carousel-item active" data-bs-interval="10000">
                                <img src={Foto6} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block text-light">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                <img src={Foto6} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                                </div>
                                <div className="carousel-item">
                                <img src={Foto6} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </div>

      </>
  );
}

export default Evento;