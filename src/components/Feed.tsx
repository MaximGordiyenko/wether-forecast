"use client";
import { useState, useEffect } from "react";
import { WeatherTable } from "./widgets/WeatherTable";
import Grid from '@mui/material/Grid';
import { GridBlock } from "./charts/styles";
import { BarChart } from "./charts/BarChart";
import { calculateAverage } from "@/utilities/utilities";

export const Feed = () => {
  const [ allPosts, setAllPosts ] = useState<File[]>([]);
  
  const fetchPosts = async () => {
    const response = await fetch("/api/feed", {cache: "force-cache"});
    const data = await response.json();
    setAllPosts(data);
  };
  
  useEffect(() => {
    fetchPosts().then(r => r);
  }, []);
  
  const newArray = [];
  
  for (let i = 0; i < allPosts.length; i++) {
    const {temperature_2m_max, temperature_2m_min, winddirection_10m_dominant} = allPosts[i].data.daily;
    
    const averageTemperatureMax = calculateAverage(temperature_2m_max);
    const averageTemperatureMin = calculateAverage(temperature_2m_min);
    const averageWindDirection = calculateAverage(winddirection_10m_dominant);
    
    const obj = {
      temperature_2m_max: averageTemperatureMax,
      temperature_2m_min: averageTemperatureMin,
      winddirection_10m_dominant: averageWindDirection,
      name: allPosts[i].name,
    };
    
    newArray.push(obj);
  }
  ;
  
  return (
    
    <GridBlock container spacing={2}>
      <Grid item xs={6}>
        <WeatherTable data={newArray}/>
      </Grid>
      <Grid item xs={6}>
        <BarChart data={newArray}/>
      </Grid>
    </GridBlock>
  );
};
