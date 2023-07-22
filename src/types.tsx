import { ReactNode } from "react";

export interface IChart {
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  winddirection_10m_dominant: number[];
  name: string;
}

export interface IState {
  data: any[];
  loading?: boolean;
  error?: any;
}

export interface IChild {
  children: ReactNode;
}
