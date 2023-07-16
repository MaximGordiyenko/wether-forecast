import { NextResponse } from 'next/server';
import { cities } from '../../../constants';
import { baseUrl } from "../constants";

const fetchWeatherData = async (city) => {
  try {
    const url = `${baseUrl}&latitude=${city.latitude}&longitude=${city.longitude}`;
    const response = await fetch(url);
    const data = await response.json();
    return { data, name: city.name };
  } catch (error) {
    console.error('Error route weather data:', error);
  }
};

export async function GET() {
  const weatherData = await Promise.all(cities.map(fetchWeatherData));
  return NextResponse.json(weatherData);
}
