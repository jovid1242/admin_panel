import { IBadgeProps } from "models/core/elements";
import React from "react";
import { FC } from "react";
import "styles/core/xbadges.scss";

const XBadges: FC<IBadgeProps> = ({ type, name }) => {
  return (
    <div>
      <div className={`badge ${type}`}>{name}</div>
    </div>
  );
};
export default XBadges;
