import React from 'react';
import nosotros from '../images/Nosotros.jpg'
import '../styles/Nosotros.css';
import Footer from "./footer";

const Nosotros = () => {
  const videoId = 'SmpYmb3MOjE';
  return (
    <>
      <div className="container-fluid">
        <hr />
        <hr />
        <h1 className="mt-5">HISTORIA</h1>
        <div id='syleCard' className="card mb-3 bg-transparent text-light" >
          <div className="row g-0">
            <div className="col-md-4 h-100">
              <div className='inner' >
                <img src={nosotros} className="img-fluid rounded-start" alt="nosotros"/>
              </div>
              
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Bien Extremo Fest</h5>
                <p className="card-text">Organización de eventos de música extrema autogestionada..</p>
                <p className="card-text text-light">Hell and Heaven Open Air surge como una iniciativa de empresarios mexicanos que vieron dentro del mercado nacional, una enorme oportunidad de crecimiento para el desarrollo del rock y el metal.

                Hell And Heaven Metal Fest, fue originalmente una inversión de las productoras de espectáculos INFINITY (propiedad de Guerrero) y CEIME (de Castañeda y Alcaraz) quienes apoyados por el patrocinador Grupo Modelo concibieron el primer festival en diciembre de 2010, ya que ambas productoras tenían fechas con los grupos Brujería y Therion, conciertos que inicialmente se presentarían por separado, pero que finalmente decidieron presentarlos juntos y crear un Festival con tres escenarios al aire libre en el recinto conocido como Calle Dos de Zapopan, Jalisco, al que invitaron un gran número de bandas nacionales para hacerlo más atractivo para la escena mexicana. El nombre de Hell And Heaven Metal Fest, surge debido a que los mismos empresarios habían presentado en ese recinto un par de años antes a la banda de los integrantes de Black Sabbath, con Ronnie James “Dio” en las vocales -Heaven And Hell-, y se quedaron impresionados por la sencillez y carisma del legendario cantante, por lo que decidieron titular el festival con el nombre de la banda invertido, Hell And Heaven Metal Fest, haciendo así homenaje al desaparecido cantante, quien falleció de cáncer unos meses antes de la primera edición del festivalLorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa a aliquam corrupti ducimus animi eos, officia impedit exercitationem, quod voluptate nam autem fuga. Distinctio quis nesciunt aspernatur recusandae sequi voluptas.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, in ea debitis vel, consequatur facilis necessitatibus assumenda tempora maxime commodi quibusdam, sint aperiam! Laboriosam, ipsa. Debitis accusamus velit exercitationem provident.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='container container-fluid' >
          <div className="ratio ratio-16x9">
            <iframe
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
          </div>
        </div>

    </div>
    <Footer />
    </>

  );
}

export default Nosotros;