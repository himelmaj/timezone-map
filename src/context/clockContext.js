import { createContext } from "react";

export const defaultContext = {
    lat: null, 
    lng: null,
    timezones: null, 
}; 

export const clockContext = createContext(defaultContext);
