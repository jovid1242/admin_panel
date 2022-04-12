import React from "react";

import "../../../styles/submenu/submenu.scss";

export default function SubMenu({ visibility }) {
  return (
    <>
      <div className={visibility ? "submenu d-none" : "submenu"}>
        <ul className="submenu__list ">
          <li>
            <a href="#">* Sale</a>
          </li>
          <li>
            <a href="#">* Sale</a>
          </li>
        </ul>
      </div>
    </>
  );
}
