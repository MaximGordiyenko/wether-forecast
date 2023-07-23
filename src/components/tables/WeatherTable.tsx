"use client";
import { FC } from "react";
import { IState } from '@/types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { StyledTableCell, StyledTableRow } from "@/components/tables/styles";
import { tableHeaders } from "@/constants";

export const WeatherTable: FC<IState> = ({data}) => {

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {tableHeaders.map((head: string) => <StyledTableCell key={head}>{head}</StyledTableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row: any) =>
            <StyledTableRow key={row.name}>
              <TableCell component="th" scope="row">{row?.name}</TableCell>
              <TableCell>{row?.temperature_2m_min[0]}</TableCell>
              <TableCell>{row?.temperature_2m_max[0]}</TableCell>
              <TableCell>{row?.winddirection_10m_dominant[0]}</TableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
