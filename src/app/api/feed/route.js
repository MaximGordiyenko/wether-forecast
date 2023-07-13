import { NextResponse } from 'next/server';
import { cities } from '../../../constants';

export const baseUrl = 'https://api.open-meteo.com/v1/forecast?daily=temperature_2m_max,temperature_2m_min,winddirection_10m_dominant&timezone=GMT';

const fetchWeatherData = async (city) => {
  const url = `${baseUrl}&latitude=${city.latitude}&longitude=${city.longitude}`;
  const response = await fetch(url);
  const data = await response.json();
  return { data, name: city.name };
};

export async function GET() {
  const weatherData = await Promise.all(cities.map(fetchWeatherData));
  return NextResponse.json(weatherData);
}
