//     // This is an example with default parameters

//     simplyCountdown('#cuenta', {
//         year: 2023, // required
//         month: 8, // required
//         day: 28, // required
//         hours: 0, // Default is 0 [0-23] integer
//         minutes: 0, // Default is 0 [0-59] integer
//         seconds: 0, // Default is 0 [0-59] integer
//         words: { //words displayed into the countdown
//             days: { singular: 'day', plural: 'days' },
//             hours: { singular: 'hour', plural: 'hours' },
//             minutes: { singular: 'minute', plural: 'minutes' },
//             seconds: { singular: 'second', plural: 'seconds' }
//         },
//         plural: true, //use plurals
//         inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
//         inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
//         // in case of inline set to false
//         enableUtc: false, //Use UTC or not - default : false
//         onEnd: function() { return; }, //Callback on countdown end, put your own function here
//         refresh: 1000, // default refresh every 1s
//         sectionClass: 'simply-section', //section css class
//         amountClass: 'simply-amount', // amount css class
//         wordClass: 'simply-word', // word css class
//         zeroPad: false,
//         countUp: false
// });

// // Also, you can init with already existing Javascript Object.
// let myElement = document.querySelector('.my-countdown');
// simplyCountdown(myElement, { /* options */ });

// let multipleElements = document.querySelectorAll('.my-countdown');
// simplyCountdown(multipleElements, { /* options */ });

// import React, { useEffect, useRef } from 'react';
// import simplyCountdown from 'simply-countdown';

// const Countdown = () => {
//     const countdownRef = useRef(null);
  
//     useEffect(() => {
//       // Configura simplyCountdown en el useEffect
//       const options = {
//         year: 2023,
//         month: 8,
//         day: 28,
//         hours: 0,
//         minutes: 0,
//         seconds: 0,
//         words: {
//           days: { singular: 'day', plural: 'days' },
//           hours: { singular: 'hour', plural: 'hours' },
//           minutes: { singular: 'minute', plural: 'minutes' },
//           seconds: { singular: 'second', plural: 'seconds' }
//         },
//         plural: true,
//         inline: false,
//         inlineClass: 'simply-countdown-inline',
//         enableUtc: false,
//         onEnd: function() { return; },
//         refresh: 1000,
//         sectionClass: 'simply-section',
//         amountClass: 'simply-amount',
//         wordClass: 'simply-word',
//         zeroPad: false,
//         countUp: false
//       };
  
//       countdownRef.current = simplyCountdown('#cuenta', options);
  
//       // Si deseas limpiar el contador al desmontar el componente, puedes hacerlo así:
//       return () => {
//         if (countdownRef.current) {
//           countdownRef.current.stop();
//         }
//       };
//     }, []);
  
//     return <div id="cuenta"></div>;
//   };
  
// export default Countdown;
  