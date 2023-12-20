import GoogleMapReact from "google-map-react";
import { useContext, useEffect, useCallback} from "react";
import { clockContext } from "../context/clockContext";
import axios from "axios";
export default function SimpleMap() {

  const { dispatch } = useContext(clockContext);

  const defaultProps = {
    center: {
      lat: 40.709725514100604,
      lng: -2.747947863238629,
    },
    zoom: 7,
  };


  const handleClick = useCallback(async ({ lat, lng }) => {
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${lat}%2C${lng}&timestamp=1331161200&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`);
      
      // Aquí puedes hacer algo con los datos de respuesta si es necesario
      const timezoneData = response.data.timeZoneId;
  
      dispatch({
        type: "SET_LAT_LNG",
        payload: {
          lat: lat,
          lng: lng,
          timezones: timezoneData,
        }
      });
  
      console.log(lat, lng);
      console.log(timezoneData);
    } catch (error) {
      // Manejar errores de la solicitud
      console.error("Error al obtener la zona horaria:", error);
    }
  }, []);
  

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
      defaultCenter={defaultProps.center}
      defaultZoom={6.7}
      onClick={handleClick}
    />
  );
}