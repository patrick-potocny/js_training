import { Api } from "./modules/api";

async function logData() {
  const api = new Api('Piestany')
  const data = await api.getForecastData('imperial')
  console.log(data);
  const newData = await api.getForecastData('metric')
  console.log(newData);
}

logData()