import { IButtonProps } from "models/core/button";
import React, { FC } from "react";
import "styles/core/xbutton.scss";
const XButton: FC<IButtonProps> = ({ type, name, icon }) => {
  return (
    <div className="btn">
      <button className={type}>
        {name} {icon}
      </button>
    </div>
  );
};

export default XButton;
