import { ReactNode } from "react";

export interface IReciveProps {
  amount: string;
  installments: string;
  mdr: string;
  days?: string;
}

export interface IInstallments {
  1: number;
  15: number;
  30: number;
  90: number;
}

export interface IReceiveContext {
  getReceive: (data: IReciveProps) => void;
  installments: IInstallments;
}

export interface IReceiveContextProps {
  children: ReactNode;
}
