export function reducer(state, action) {
    switch (action.type) {
        case "SET_COUNTRY":
            return {
                ...state,
                currentZone: "",
                code: action.payload.code,
                timezones: action.payload.timezones,
                country: action.payload.country
            };
        case "SET_FORMAT":
            return {
                ...state,
                format: action.payload
            };
        case "SET_TIMEZONE":
            return {
                ...state,
                currentZone: action.payload
            };
        default:
            return state;
    }
}
