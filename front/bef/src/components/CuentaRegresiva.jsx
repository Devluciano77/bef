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
<div id='' className='container text-center'>
  <h1 className='mt-5 mb-5'>EL EVENTO COMIENZA EN</h1>
  <div className='row align-items-center mb-5'>
    <div className='col-sm-6 col-md-3'>
      <div className='card  border bg-transparent text-light'>
        <div className='card-body'>
          {days > 0 && (
            <h2 className='simply-amount'>
              <span className='number me-3'>{days}</span> día{days > 1 ? 's' : ''}
            </h2>
          )}
        </div>
      </div>
    </div>
    <div className='col-sm-6 col-md-3'>
      <div className='card  border bg-transparent text-light'>
        <div className='card-body'>
          <h2 className='simply-amount'>
            <span className='number me-3'>{hours}</span> hora{hours > 1 ? 's' : ''}
          </h2>
        </div>
      </div>
    </div>
    <div className='col-sm-6 col-md-3'>
      <div className='card  border bg-transparent text-light'>
        <div className='card-body'>
          <h2 className='simply-amount'>
            <span className='number me-3'>{minutes}</span> minuto{minutes > 1 ? 's' : ''}
          </h2>
        </div>
      </div>
    </div>
    <div className='col-sm-6 col-md-3'>
      <div className='card  border bg-transparent text-light'>
        <div className='card-body'>
          <h2 className='simply-amount'>
            <span className='number me-3'>{seconds}</span> segundo{seconds > 1 ? 's' : ''}
          </h2>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Cuenta;