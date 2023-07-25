"use client";
import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Grid from '@mui/material/Grid';
import { useAppContext, useAppDispatch } from "@/context/AppProvider";
import { WeatherTable } from "@/components/tables/WeatherTable";
import { GridBlock } from "./charts/styles";
import {
  convertToLabelValueObj,
  convertToFlatObj,
  convertArrayToObjectOfArrays,
  filterArrayByCity
} from "@/utilities/utilities";
import { Charts } from "@/components/charts/bar/Charts";
import { fetchData } from "@/context/action/app.action";
import { CityFilter } from "@/components/filters/CityFilter";

export const WeatherWidget = () => {
  const state = useAppContext();
  const dispatch = useAppDispatch();
  
  const methods = useForm();
  const {watch} = methods;
  
  useEffect(() => {
    fetchData(dispatch).then(r => r);
  }, [ dispatch ]);
  
  const flatObj = convertToFlatObj(state);
  
  const data = flatObj && convertToLabelValueObj(flatObj[0]?.temperature_2m_max, flatObj[0]?.time);
  
  const select = convertArrayToObjectOfArrays(flatObj)
  
  const getCity = filterArrayByCity(flatObj, watch('country'))
  
  return (
    <FormProvider {...methods}>
      <GridBlock container spacing={2}>
        {state.loading && <div>loading...</div>}
        <Grid item xs={12} md={7} lg={7}>
          <CityFilter select={select}/>
          <WeatherTable data={getCity}/>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <Charts data={data}/>
        </Grid>
      </GridBlock>
    </FormProvider>
  );
};
