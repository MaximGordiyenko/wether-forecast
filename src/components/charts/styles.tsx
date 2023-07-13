import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

export const GridBlock = styled(Grid)(({theme}) => ({
  width: '100%',
  margin: 'auto',
  padding: theme.spacing(3),
  color: theme.palette.text.secondary,
}));
