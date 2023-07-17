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

                    <div className="container container-fluid">
                        <div className="col">
                            <div className="card h-100">
                                <div className="inner"> 
                                    <img src={Foto2} className="card-img-top" alt="..."/>
                                </div>
                            <div className="card-body">
                                {/* <h5 className="card-title">Nerium</h5> */}
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nostrum praesentium voluptatibus! Magni sed, officiis dolore ullam possimus exercitationem iusto sit pariatur qui in eligendi placeat animi, velit quaerat! Ad.
                                lo</p>
                            </div>
                            <div className="card-footer">
                            {/* <small className="text-body-secondary">28 de junio</small> */}
                            </div>
                            </div>
                        </div>
                    </div>
                    <div id='mapa'>
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