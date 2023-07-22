"use client";
import { useEffect } from "react";
import { WeatherTable } from "@/components/tables/WeatherTable";
import Grid from '@mui/material/Grid';
import { GridBlock } from "./charts/styles";
import { FETCH_ERROR, FETCH_SUCCESS } from "@/context/types/app.types";
import { useAppContext, useAppDispatch } from "@/context/AppProvider";
import { getWeatherData } from "@/api/api";
import { Chart } from "@/components/charts/bar/Chart";
import { convertArraysToObjects, getsWeekdays } from "@/utilities/utilities";

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
  
  const flatArray = [];
  
  for (let i = 0; i < state.data.length; i++) {
    const {temperature_2m_max, temperature_2m_min, winddirection_10m_dominant, time} = state.data[i].data.daily;
    
    flatArray.push({
      temperature_2m_max,
      temperature_2m_min,
      winddirection_10m_dominant,
      time: getsWeekdays(time),
      name: state.data[i].name,
    });
  }
  
  const data = flatArray && convertArraysToObjects(flatArray[0]?.temperature_2m_max, flatArray[0]?.time);

  return (
    <GridBlock container spacing={2}>
      {state.loading && <div>loading...</div>}
      <Grid item xs={6}>
        <WeatherTable data={flatArray}/>
      </Grid>
      <Grid item xs={6}>
        <Chart data={data}/>
      </Grid>
    </GridBlock>
  );
};
