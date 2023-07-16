import { ReactNode } from "react";

export interface IState {
  data: any[];
  loading?: boolean;
  error?: any;
}

export interface IChild {
  children: ReactNode;
}
