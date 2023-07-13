"use client";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Feed } from "@/components/Feed";

export const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Feed />
    </ThemeProvider>
  );
};
