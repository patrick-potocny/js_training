import axios from "axios"

const API_KEY = 'b94d92303d54e4a5f65dfe6a3ac9b9e4'

export class Api {
  constructor(searchTerm){
    this.searchTerm = searchTerm
  }

  async makeApiCall(url){
    try {
      const response = await axios.get(url);
      return response.data
    }catch (error) {
      console.log('City not found try again');
      return null
    }
  }

  async getForecastData(units){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.searchTerm}&appid=${API_KEY}&units=${units}`
    const data = await this.makeApiCall(url)
    if (data != null){
    const city = data.name
    const weather = data.weather[0].main
    const {temp, feels_like, temp_min, temp_max, pressure, humidity, sea_level, grnd_level} = data.main
    return {city, weather, temp, feels_like, temp_min, temp_max, pressure, humidity, sea_level, grnd_level};
    }
  }
}
