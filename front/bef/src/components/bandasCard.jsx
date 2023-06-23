import React from "react";
import Band1 from '../images/band1.jpg'
import Band2 from '../images/band2.jpg'
import Band3 from '../images/band3.jpg'
import Band4 from '../images/band4.jpg'
import '../styles/BandasCard.css'

function BandasCard(){
    return(
        <>
        <div id="container-cards" >
            <h1>BANDAS CONFIRMADAS</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4 p-4 ">

                <div className="col">
                    <div className="card h-100">
                    <img src={Band2} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Horror Chamber</h5>
                        <p className="card-text">Como lo dijimos por la mañana! Iniciamos con el anuncio de las bandas que formaran parte del festival!
                        Con ustedes Horror Chamber desde Brasil! Que se estará presentando el día sábado 18.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">6 de junio</small>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={Band1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Spontaneous Combustion</h5>
                        <p className="card-text">Reaparecemos este domingo para compartirles otra excelente banda que formará parte del día sábado 18! Los amigos de Tierra del Fuego Spontaneous Combustion ☠️</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">11 de junio</small>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={Band3} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Sadistic Art</h5>
                        <p className="card-text">Buenas tardes amigos! Seguimos anunciando las bandas del Festival! En esta ocasión le presentamos a los amigos de SADISTIC ART desde Paraguay! Que se estará presentando el sabado 18</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">22 de junio</small>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={Band4} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Nocturnal Desecration</h5>
                        <p className="card-text">También se hace presente esta excelente banda de nuestra provincia Misiones! Nocturnal Desecration que se estará presentando el día sábado 18 🤘🏻.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">22 de junio</small>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                    <img src={Band2} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Horror Chamber</h5>
                        <p className="card-text">Como lo dijimos por la mañana! Iniciamos con el anuncio de las bandas que formaran parte del festival!
                        Con ustedes Horror Chamber desde Brasil! Que se estará presentando el día sábado 18.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">6 de junio</small>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={Band1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Spontaneous Combustion</h5>
                        <p className="card-text">Reaparecemos este domingo para compartirles otra excelente banda que formará parte del día sábado 18! Los amigos de Tierra del Fuego Spontaneous Combustion ☠️</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">11 de junio</small>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={Band3} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Sadistic Art</h5>
                        <p className="card-text">Buenas tardes amigos! Seguimos anunciando las bandas del Festival! En esta ocasión le presentamos a los amigos de SADISTIC ART desde Paraguay! Que se estará presentando el sabado 18</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">22 de junio</small>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={Band4} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Nocturnal Desecration</h5>
                        <p className="card-text">También se hace presente esta excelente banda de nuestra provincia Misiones! Nocturnal Desecration que se estará presentando el día sábado 18 🤘🏻.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">22 de junio</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>    
        </>
    )
}

export default BandasCard;