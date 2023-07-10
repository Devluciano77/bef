import React from 'react';
import '../styles/Evento.css';
import Footer from "./footer";
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

                <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
                    <div className="col p-4">
                        <div className="card h-100">
                            <div className="inner"> 
                                <img src={Foto2} className="card-img-top" alt="..."/>
                            </div>
                        <div className="card-body">
                            <h5 className="card-title">Nerium</h5>
                            <p className="card-text">Aquí compartimos con ustedes esta excelente banda de Death Metal, directamente desde Uruguay! Los amigos de Nerium / Brutal Death</p>
                        </div>
                        <div className="card-footer">
                        <small className="text-body-secondary">28 de junio</small>
                        </div>
                        </div>
                    </div>
                </div>
                <div id='mapa'>
                    <h1 className='text-light' >UBICACION</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28549.47960938926!2d-54.781562045798196!3d-26.562387174753592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f77810368f52bb%3A0x5a0094770a4a9dda!2sParque%20Juan%20Vortisch!5e0!3m2!1ses!2sar!4v1688997343916!5m2!1ses!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
                <Footer />
            </div>
        </div>

      </>
  );
}

export default Evento;