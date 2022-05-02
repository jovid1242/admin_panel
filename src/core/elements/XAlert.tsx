import { IAlertProps } from "models/core/alert";
import React from "react";
import { FC } from "react";
import "styles/core/xalert.scss";

const XAlert: FC<IAlertProps> = ({ type, text }) => {
  const className = `alert alert-${type}`;
  return (
    <div className={className}>
      {text}
      <span className="closebtn">&times;</span>
    </div>
  );
};
export default XAlert;
