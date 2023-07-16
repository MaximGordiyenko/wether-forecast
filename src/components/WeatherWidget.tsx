"use client";
import { useEffect } from "react";
import { WeatherTable } from "./widgets/WeatherTable";
import Grid from '@mui/material/Grid';
import { GridBlock } from "./charts/styles";
import { BarChart } from "./charts/BarChart";
import { calculateAverage } from "@/utilities/utilities";
import { FETCH_ERROR, FETCH_SUCCESS } from "@/context/types/app.types";
import { useAppContext, useAppDispatch } from "@/context/AppProvider";
import { getWeatherData } from "@/api/api";

export const WeatherWidget = () => {
  const state = useAppContext();
  const dispatch = useAppDispatch();
  
  const fetchData = async () => {
    try {
      const data = await getWeatherData();
      dispatch({
        type: FETCH_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: FETCH_ERROR,
        payload: error.message,
      });
    }
  };
  
  useEffect(() => {
    fetchData().then(r => r);
  }, []);
  
  const newArray = [];
  
  for (let i = 0; i < state.data.length; i++) {
    const {temperature_2m_max, temperature_2m_min, winddirection_10m_dominant} = state.data[i].data.daily;
    
    const averageTemperatureMax = calculateAverage(temperature_2m_max);
    const averageTemperatureMin = calculateAverage(temperature_2m_min);
    const averageWindDirection = calculateAverage(winddirection_10m_dominant);
    
    const obj = {
      temperature_2m_max: averageTemperatureMax,
      temperature_2m_min: averageTemperatureMin,
      winddirection_10m_dominant: averageWindDirection,
      name: state.data[i].name,
    };
    
    newArray.push(obj);
  }

  return (
    <GridBlock container spacing={2}>
      {state.loading && <div>loading...</div>}
      <Grid item xs={6}>
        <WeatherTable data={newArray}/>
      </Grid>
      <Grid item xs={6}>
        <BarChart data={newArray}/>
      </Grid>
    </GridBlock>
  );
};
