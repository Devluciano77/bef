import React, { useEffect, useRef } from 'react';
import '../styles/cuenta.css';

const Cuenta = () => {
    const countdownRef = useRef(null);
  
    useEffect(() => {
      // Configura simplyCountdown en el useEffect
      const options = {
        year: 2023,
        month: 8,
        day: 28,
        hours: 0,
        minutes: 0,
        seconds: 0,
        words: {
          days: { singular: 'day', plural: 'days' },
          hours: { singular: 'hour', plural: 'hours' },
          minutes: { singular: 'minute', plural: 'minutes' },
          seconds: { singular: 'second', plural: 'seconds' }
        },
        plural: true,
        inline: false,
        inlineClass: 'simply-countdown-inline',
        enableUtc: false,
        onEnd: function() { return; },
        refresh: 1000,
        sectionClass: 'simply-section',
        amountClass: 'simply-amount',
        wordClass: 'simply-word',
        zeroPad: false,
        countUp: false
      };
  
      countdownRef.current = simplyCountdown('#cuenta', options);
  
      // Si deseas limpiar el contador al desmontar el componente, puedes hacerlo así:
      return () => {
        if (countdownRef.current) {
          countdownRef.current.stop();
        }
      };
    }, []);
  
    return <div id="cuenta"></div>;
  };
  
export default Cuenta;