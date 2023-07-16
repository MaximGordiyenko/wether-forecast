import { FC } from "react";
import { IState } from '@/types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledTableCell, StyledTableRow } from "@/components/widgets/styles";

export const WeatherTable: FC<IState> = ({data}) => {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>City</StyledTableCell>
            <StyledTableCell>Temperature min</StyledTableCell>
            <StyledTableCell>Temperature max</StyledTableCell>
            <TableCell>Wind Direction</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row: any) =>
            <StyledTableRow key={row.name}>
              <TableCell component="th" scope="row">{row?.name}</TableCell>
              <TableCell>{row?.temperature_2m_min}</TableCell>
              <TableCell>{row?.temperature_2m_max}</TableCell>
              <TableCell>{row?.winddirection_10m_dominant}</TableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
