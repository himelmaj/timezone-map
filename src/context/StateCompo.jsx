// import { clockContext } from "./clockContext";
// import { useState, useEffect } from "react";
// import moment from 'moment-timezone';


// // import { getTimeByCordinates } from "../api/time.api";



// const StateCompo = ({ children }) => {
//   const [userLocation, setUserLocation] = useState(null);
//   const [timezone, setTimezone] = useState(null);
//   const [clock, setClock] = useState(new Date());
//     useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         setUserLocation({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         });
//       });
//     }else{
//       setUserLocation({
//         lat: 40.709725514100604,
//         lng: -2.747947863238629,
//       });
//     }
//   }, []);
//   const handleClick = (event) => {
//     setUserLocation({
//       lat: event.lat,
//       lng: event.lng,
//     });
//     console.log("Clicked at:", event.lat, event.lng);
//   };
//   useEffect(() => {
//     if (userLocation !== null) {
//       async function getTime() {
//         const response = await fetch(
//           `http://api.timezonedb.com/v2.1/get-time-zone?key=${
//             import.meta.env.VITE_TIMEZONE_API_KEY
//           }&format=json&by=position&lat=${userLocation.lat}&lng=${
//             userLocation.lng
//           }`
//         );
//         const data = await response.json();
//         setTimezone(data.zoneName);
//       }
//       getTime();
//     }
//   }, [userLocation]);

//   return <clockContext.Provider value={{userLocation, setUserLocation, handleClick, setTimezone, clock, setClock}}>{children}</clockContext.Provider>;
// };

// export default StateCompo;
