import React, { FC } from "react";
import "styles/core/xcard.scss";
import XDropdownMenu from "core/dropdown/XDropdownMenu";
import { ICardProps } from "models/core/card";

const XCard: FC<ICardProps> = ({ cardBody, title, actions }) => {
  const getActions = () => {
    if (actions) {
      return <XDropdownMenu items={actions} />;
    }
    return "";
  };
  return (
    <div className="block">
      <div className="block-header">
        <div className="block-header__title">
          <h5>{title}</h5>
        </div>
        <div className="block-actions">{getActions()}</div>
      </div>
      <div className="block-body">{cardBody}</div>
    </div>
  );
};
export default XCard;
