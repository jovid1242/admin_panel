import { IDFlexProps } from "models/core/grid";
import React from "react";
import { FC } from "react";
import "styles/core/dflex.scss";

const DFlex: FC<IDFlexProps> = ({ flexContent, type }) => {
  return <div className={type}>{flexContent}</div>;
};

export default DFlex;
