import React, { useState } from "react";
import SubMenu from "../submenu/SubMenu";
import { BiHomeAlt } from "react-icons/bi";
import { RiApps2Line } from "react-icons/ri";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { BsFillChatDotsFill } from "react-icons/bs";
import { SiRevealdotjs, SiNuxtdotjs } from "react-icons/si";

export default function Menu() {
    const [activeTab, setActiveTab] = useState("");

    const link = [
        {
            href: "#",
            title: "Dashboard",
            icon: <BiHomeAlt />,
            submenu: [
                {
                    href: "#",
                    title: "sale"
                },
                {
                    href: "#",
                    title: "sale"
                }
            ]
        },
        {
            href: "#",
            title: "Apps",
            icon: <RiApps2Line />
        },
        {
            href: "#",
            title: "sale3",
            icon: <BsFillChatDotsFill />
        },
        {
            href: "#",
            title: "sale4",
            icon: <SiRevealdotjs />
        },
        {
            href: "#",
            title: "sale",
            icon: <SiNuxtdotjs />
        }
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
                                    <div className="list_name">
                                        <div className="list_icon">
                                            {el.icon}
                                        </div>
                                        <span>{el.title}</span>
                                    </div>
                                    {el.submenu ? (
                                        <div
                                            className="list_vicon"
                                            onClick={() =>
                                                handleMenuBtn(el.title)
                                            }
                                        >
                                            {activeTab !== "" ? (
                                                <IoMdArrowDropdown />
                                            ) : (
                                                <IoMdArrowDropup />
                                            )}
                                        </div>
                                    ) : (
                                        <div className=""></div>
                                    )}
                                </div>
                            </a>
                            {el.submenu ? (
                                <SubMenu
                                    visibility={
                                        activeTab === el.title ? true : false
                                    }
                                />
                            ) : null}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
