"use client";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { WeatherWidget } from "@/components/WeatherWidget";
import { AppProvider } from "@/context/AppProvider";

export const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
  return (
    <ThemeProvider theme={darkTheme}>
      <AppProvider>
        <WeatherWidget/>
      </AppProvider>
    </ThemeProvider>
  );
};
