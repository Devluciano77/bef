import React, { useState, useEffect } from 'react';

const Cuenta = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-11-18") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div id='' className='container text-center' >
      <h1>Comienza en</h1>
      <div className='row align-items-center simply-section'>
        <div className='col'>
          {days > 0 && <h2 className='simply-amount'>{`${days} dia${days > 1 ? 's' : ''}`}</h2>}
        </div>
        <div className='col'>
          <h2 className='simply-amount'>{`${hours} hora${hours > 1 ? 's' : ''}`}</h2>
        </div>
        <div className='col'>
          <h2 className='simply-amount'>{`${minutes} minuto${minutes > 1 ? 's' : ''}`}</h2>
        </div>
        <div className='col'>
          <h2 className='simply-amount'>{`${seconds} segundo${seconds > 1 ? 's' : ''}`}</h2>
        </div>  
      </div>

    </div>
  );
};

export default Cuenta;