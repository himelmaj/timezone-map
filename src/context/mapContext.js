import { createContext } from "react";

export const defaultMapContext = {
    country: null,
    code: null,
    format: 12,
    timezones: [],
    currentZone: null
};

export const MapContext = createContext(null);