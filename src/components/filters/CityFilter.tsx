import Grid from "@mui/material/Grid";
import { CheckboxSelect } from "@/components/select/CheckboxSelect";

export const CityFilter = ({select}: any) => {
  return (
    <Grid container columnSpacing={5}>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <CheckboxSelect name='country' options={select?.cityNames} placeholder='Country'/>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <CheckboxSelect name='min' options={select?.temperatureMinAvg} placeholder='Min'/>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <CheckboxSelect name='max' options={select?.temperatureMaxAvg} placeholder='Max'/>
      </Grid>
    </Grid>
  );
};
