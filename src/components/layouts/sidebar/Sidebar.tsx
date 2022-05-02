import React, { FC } from "react";
import "styles/layouts/sidebar.scss";
import Menu from "./menu/Menu";

export const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="menu">
          <Menu />
        </div>
      </div>
    </div>
  );
};
