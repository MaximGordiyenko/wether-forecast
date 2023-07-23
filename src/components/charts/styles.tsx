import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

export const GridBlock = styled(Grid)`
  width: 100%;
  margin: auto;
  padding: ${({theme}) => theme.spacing(3)};
  color: ${({theme}) => theme.palette.text.secondary};
`;
