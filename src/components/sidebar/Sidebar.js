import React from "react";
import "../../styles/sidebar/sidebar.scss";
import Menu from "./menu/Menu";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="menu">
          <Menu />
        </div>
      </div>
    </div>
  );
}
