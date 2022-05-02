import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { FC } from "react";
import { menuItems } from "router/menu";
import { IActiveTab } from "models/layouts/IMenu";
import SubMenu from "../submenu/SubMenu";

const Menu: FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState({
    visibility: false,
    name: null
  } as IActiveTab);

  const toggleMenuBtn = (name: string) => {
    if (activeTab.name === name && activeTab.visibility) {
      setActiveTab({ visibility: false, name: name });
    } else {
      setActiveTab({ visibility: true, name: name });
    }
  };

  const userParams = location.pathname.split("/")[1];

  return (
    <>
      <ul className="menu__categories">
        {menuItems.map((el, i) => {
          return (
            <li
              className={
                el.title.toLowerCase() === userParams
                  ? "menu_categories__list activeTabMenu"
                  : "menu_categories__list"
              }
              key={el.title + i}
            >
              <Link to={el.href} className="m_list">
                <div className="list" onClick={() => toggleMenuBtn(el.title)}>
                  <div className="list_name">
                    <div className="list_icon">
                      <el.icon />
                    </div>
                    <span>{el.title}</span>
                  </div>
                  {el.submenu ? (
                    <div className="list_vicon">
                      {activeTab.name === el.title ? (
                        activeTab.visibility ? (
                          <FiChevronUp />
                        ) : (
                          <FiChevronDown />
                        )
                      ) : (
                        <FiChevronDown />
                      )}
                    </div>
                  ) : (
                    <div className=""></div>
                  )}
                </div>
              </Link>
              {activeTab.name === el.title ? (
                el.submenu ? (
                  <SubMenu
                    visibility={activeTab.visibility}
                    items={el.submenu}
                  />
                ) : null
              ) : null}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Menu;
