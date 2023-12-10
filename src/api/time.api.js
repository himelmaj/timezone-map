// import axios from "axios";
// const TIME_API_URL =  axios.create({baseURL: "http://worldtimeapi.org/api/timezone"});
// export const getTimeZones = () => axios.get(TIME_API_URL);
// export const getTime = (timezone) => axios.get(`${TIME_API_URL}/${timezone}`);
export async function getTimeZones() {
    try {
      const response = await fetch("http://worldtimeapi.org/api/timezone");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching timezones:", error);
      throw error;
    }
  }