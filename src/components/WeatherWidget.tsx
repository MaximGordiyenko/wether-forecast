"use client";
import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Grid from '@mui/material/Grid';
import { useAppContext, useAppDispatch } from "@/context/AppProvider";
import { WeatherTable } from "@/components/tables/WeatherTable";
import { GridBlock } from "./charts/styles";
import { convertToLabelValueObj, convertToFlatObj, convertArrayToObjectOfArrays, filterArrayByCity } from "@/utilities/utilities";
import { Charts } from "@/components/charts/bar/Charts";
import { CheckboxSelect } from "@/components/select/CheckboxSelect";
import { fetchData } from "@/context/action/app.action";

export const WeatherWidget = () => {
  const state = useAppContext();
  const dispatch = useAppDispatch();
  
  const methods = useForm();
  const {watch} = methods;
  
  useEffect(() => {
    fetchData(dispatch).then(r => r);
  }, [dispatch]);
  
  const flatObj = convertToFlatObj(state);
  
  const data = flatObj && convertToLabelValueObj(flatObj[0]?.temperature_2m_max, flatObj[0]?.time);
  
  const select = convertArrayToObjectOfArrays(flatObj)
  
  const getCity = filterArrayByCity(flatObj, watch('country'))

  return (
    <FormProvider {...methods}>
      <GridBlock container spacing={2}>
        {state.loading && <div>loading...</div>}
        <Grid item xs={7}>
          <Grid container columnSpacing={5}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <CheckboxSelect name='country' options={select?.cityNames} placeholder='Country'/>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <CheckboxSelect name='min' options={select?.temperatureMinAvg} placeholder='Min'/>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <CheckboxSelect name='max' options={select?.temperatureMaxAvg} placeholder='Max'/>
            </Grid>
          </Grid>
          <WeatherTable data={getCity}/>
        </Grid>
        <Grid item xs={5}>
          <Charts data={data}/>
        </Grid>
      </GridBlock>
    </FormProvider>
  );
};
