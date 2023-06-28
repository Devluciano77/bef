import React from 'react';
import nosotros from '../images/Nosotros.jpg'
import '../styles/Nosotros.css';

const Nosotros = () => {
  return (
    <div className="container-fluid">
        <hr />
        <hr />
        <h1>NOSOTROS EN DESARROLLO</h1>
        <div id='syleCard' className="card mb-3" >
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
                <p className="card-text"><small className="text-body-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa a aliquam corrupti ducimus animi eos, officia impedit exercitationem, quod voluptate nam autem fuga. Distinctio quis nesciunt aspernatur recusandae sequi voluptas.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, in ea debitis vel, consequatur facilis necessitatibus assumenda tempora maxime commodi quibusdam, sint aperiam! Laboriosam, ipsa. Debitis accusamus velit exercitationem provident.</small></p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Nosotros;