import React, { useState } from "react";
import SubMenu from "../submenu/SubMenu";

export default function Menu() {
  const [activeTab, setActiveTab] = useState("");

  const link = [
    {
      href: "#",
      title: "Dashboard",
      submenu: [
        {
          href: "#",
          title: "sale",
        },
        {
          href: "#",
          title: "sale",
        },
      ],
    },
    {
      href: "#",
      title: "sale",
    },
    {
      href: "#",
      title: "sale3",
    },
    {
      href: "#",
      title: "sale4",
    },
    {
      href: "#",
      title: "sale",
    },
  ];

  const handleMenuBtn = (title) => {
    if (activeTab === "") {
      setActiveTab(title);
    } else {
      setActiveTab("");
    }
  };

  return (
    <>
      <ul className="menu__categories">
        {link?.map((el, i) => {
          return (
            <li
              className={
                el.submenu
                  ? "menu_categories__list activeTabMenu"
                  : "menu_categories__list"
              }
              key={el.title + i}
            >
              <a href={el.href} className="m_list">
                <div className="list">
                  <div className=""></div>
                  <span>{el.title}</span>
                  <div
                    className="bb"
                    onClick={() => handleMenuBtn(el.title)}
                  ></div>
                </div>
              </a>
              {el.submenu ? (
                <SubMenu className={activeTab === el.title ? true : false} />
              ) : null}
            </li>
          );
        })}
      </ul>
    </>
  );
}
