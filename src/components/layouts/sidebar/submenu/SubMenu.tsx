import { ISubmenu, ISubmenuProps } from "models/layouts/IMenu";
import React, { FC } from "react";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import "styles/layouts/submenu.scss";

const SubMenu: FC<ISubmenuProps> = ({ visibility, items }: ISubmenuProps) => {
  return (
    <>
      <div className={!visibility ? "submenu d-none" : "submenu"}>
        <ul className="submenu__list ">
          {items?.map((el: ISubmenu, i: number) => {
            return (
              <li key={el.title + i}>
                <Link to={el.href}>
                  <BsDot /> {el.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SubMenu;
