import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'd0ef95fee7a1030b60f4a9ffb8a23e17';

export const fetchWeather = async (query) =>{
    const { data } = await axios.get(URL, {
        params:{
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}