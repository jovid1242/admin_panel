import { IColorLibraryProps } from "models/core/elements";
import React from "react";
import { FC } from "react";
import "styles/core/xcolorlibrary.scss";

const XColorLibrary: FC<IColorLibraryProps> = ({ type, title, palette }) => {
  return (
    <div className="color-box">
      <span className={"color-example " + type}></span>
      <div className="color-describtion">
        <h5 className="color-title">{title}</h5>
        <span>{palette}</span>
      </div>
    </div>
  );
};
export default XColorLibrary;
