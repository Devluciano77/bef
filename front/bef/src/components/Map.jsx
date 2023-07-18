import React from 'react';
import Iframe from 'react-iframe';

function GoogleMap() {
  return (
    <div className=''>
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7137.578657080537!2d-54.768414!3d-26.559035!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f77810368f52bb%3A0x5a0094770a4a9dda!2sParque%20Juan%20Vortisch!5e0!3m2!1ses!2sar!4v1689311309883!5m2!1ses!2sar"
        // width="500"
        // height="350"
        frameBorder="0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        id='mapa'
      />
    </div>
  );
}

export default GoogleMap;
