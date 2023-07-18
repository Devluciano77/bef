import React from "react";
import Band1 from '../images/band1.jpg'
import Band2 from '../images/band2.jpg'
import Band3 from '../images/band3.jpg'
import Band4 from '../images/band4.jpg'
import Band5 from '../images/band5.jpg'
import Band6 from '../images/band6.jpg'
import Band7 from '../images/band7.jpg'
import band8 from '../images/band8.jpg'
import band9 from '../images/band9.jpg'
import band10 from '../images/band10.jpg'
import band11 from '../images/band11.jpg'
import band12 from '../images/band12.jpg'

import Fond from '../images/fond.jpg'
import '../styles/BandasCard.css'
import Footer from "./footer";

function BandasCard() {
  const bandas = [
    {
        img: band12,
        title: "Deracore",
        text: "Buenas noches! Hacemos público la participación de Deracore Methall _deracore_ directamente desde Corrientes! Que estará sonando el día sábado 18!",
        date: "5 de julio"
    },
    {
        img: band11,
        title: "Social Shit",
        text: "En el día de hoy, también les presentamos a Social Shit Grind core Argentina que estará brindando su brutalidad el día domingo 19 de noviembre",
        date: "4 de julio"
    },
    {
        img: band10,
        title: "Melisma",
        text: "Buenas tardes para todos! En esta ocasión, presentamos para ustedes a Melisma directamente desde Chaco! Que estará presentándose el día domingo!",
        date: "4 de julio"
    },
    {
        img: band9,
        title: "Catacomb",
        text: "Buenas noches! Con ustedes! Los amigos de Catacomb que formarán parte de nuestro festival! No te lo podes perder!",
        date: "1 de julio"
    },
    {
        img: band8,
        title: "Inflection",
        text: "Buenos días! Reaparecemos hoy sábado para anunciar a INFLECTION que estará presente en esta sexta edición! 🤘🏻💀",
        date: "1 de Julio"
    },
    {
        img: Band7,
        title: "Soulless",
        text: "Buenos días! Hoy si jueves presentamos a Soulless directamente desde Brasil para deleitarnos con Death Metal!",
        date: "29 de junio"
    },
    {
        img: Band6,
        title: "Nerium",
        text: "Aquí compartimos con ustedes esta excelente banda de Death Metal, directamente desde Uruguay! Los amigos de Nerium / Brutal Death",
        date: "28 de junio"
    },
    {
        img: Band5,
        title: "Tierra Maldita",
        text: "Buenas tardes! Aquí estamos nuevamente! Presentamos a Tierra Maldita que estará presentando su Death Metal Progresivo desde Paraguay!",
        date: "28 de junio"
    },
    {
        img: Band4,
        title: "Nocturnal Desecration",
        text: "También se hace presente esta excelente banda de nuestra provincia Misiones! Nocturnal Desecration que se estará presentando el día sábado 18 🤘🏻.",
        date: "22 de junio"
    },
    {
        img: Band3,
        title: "Sadistic Art",
        text: "Buenas tardes amigos! Seguimos anunciando las bandas del Festival! En esta ocasión le presentamos a los amigos de SADISTIC ART desde Paraguay! Que se estará presentando el sabado 18",
        date: "22 de junio"
    },
    {
        img: Band2,
        title: "Horror Chamber",
        text: "Como lo dijimos por la mañana! Iniciamos con el anuncio de las bandas que formaran parte del festival! Con ustedes Horror Chamber desde Brasil! Que se estará presentando el día sábado 18.",
        date: "6 de junio"
    },
    {
        img: Band1,
        title: "Spontaneous Combustion",
        text: "Reaparecemos este domingo para compartirles otra excelente banda que formará parte del día sábado 18! Los amigos de Tierra del Fuego Spontaneous Combustion ☠️",
        date: "11 de junio"
    }
  ];

  return (
    <>
      <div>
        <img src={Fond} className="img-fluid position-fixed" alt="portada"></img>

        <div className="card-img-overlay">
          <br />
          <br />
          <h1 className="mt-5">BANDAS CONFIRMADAS</h1>
          <div id="container-cards" className="container-fluid">

            <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
              {bandas.map((banda, index) => (
                <div className="col p-4" key={index}>
                  <div  className="card h-100 border bg-transparent text-light">
                    <div className="inner">
                      <img src={banda.img} className="card-img-top" alt="..." />
                    </div>
                    <div id='transparentCard' className="card-body">
                      <h5 className="card-title">{banda.title}</h5>
                      <p className="card-text">{banda.text}</p>
                    </div>
                    <div id='transparentCard' className="card-footer">
                      <small className="">{banda.date}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
          <Footer />
        </div>
      </div>

    </>
  )
}

export default BandasCard;
