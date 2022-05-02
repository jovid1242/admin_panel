import React from "react";

export type IActions = string;

export interface ICardProps {
  cardBody: React.ReactNode;
  title: string;
  actions?: Array<IActions>;
}
