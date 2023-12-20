import { useReducer } from "react";

export function reducer(state, action){
  switch (action.type) {
    case "SET_LAT_LNG":
      return { ...state, lat: action.payload.lat, lng: action.payload.lng, timezones: action.payload.timezones };
    case "set_timezone":
        return { ...state, timezone: action.payload };
    default:
      return state;
  }
};

// export default function reducer(state, action) {
//     switch (action.type) {
//         case "SET_COUNTRY":
//             return {
//                 ...state,
//                 currentZone: "",
//                 code: action.payload.code,
//                 timezones: action.payload.timezones,
//                 country: action.payload.country
//             };
//         case "SET_FORMAT":
//             return {
//                 ...state,
//                 format: action.payload
//             };
//         case "SET_TIMEZONE":
//             return {
//                 ...state,
//                 currentZone: action.payload
//             };
//         default:
//             return state;
//     }
// }
