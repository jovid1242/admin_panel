import React, { useState } from "react";
import SubMenu from "../submenu/SubMenu";
import { BiHomeAlt } from "react-icons/bi";
import { RiApps2Line } from "react-icons/ri";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { CgComponents } from "react-icons/cg";
import { SiInstructables, SiNuxtdotjs } from "react-icons/si";
import { FaElementor, FaWpforms } from "react-icons/fa";
import { MdFontDownload, MdOutlineWidgets } from "react-icons/md";

export default function Menu() {
    const [activeTab, setActiveTab] = useState({
        visibility: false,
        name: null
    });

    const link = [
        {
            href: "#",
            title: "Dashboard",
            icon: <BiHomeAlt />,
            active: true,
            submenu: [
                {
                    href: "/dashboard",
                    title: "Sales"
                },
                {
                    href: "/analytics",
                    title: "Analytics"
                }
            ]
        },
        {
            href: "#",
            title: "Apps",
            icon: <RiApps2Line />,
            submenu: [
                {
                    href: "#",
                    title: "Chat"
                },
                {
                    href: "#",
                    title: "Todo List"
                },
                {
                    href: "#",
                    title: "Contacts"
                },
                {
                    href: "#",
                    title: "Invoice"
                }
            ]
        },
        {
            href: "#",
            title: "Components",
            icon: <CgComponents />,
            submenu: [
                {
                    href: "#",
                    title: "Tabs"
                },
                {
                    href: "#",
                    title: "Modals"
                },
                {
                    href: "#",
                    title: "Cards"
                },
                {
                    href: "#",
                    title: "Carousel"
                }
            ]
        },
        {
            href: "#",
            title: "Elements",
            icon: <FaElementor />
        },
        {
            href: "#",
            title: "Fonts Icons",
            icon: <MdFontDownload />
        },
        {
            href: "#",
            title: "Widgets",
            icon: <MdOutlineWidgets />
        },
        {
            href: "#",
            title: "Tables",
            icon: <SiInstructables />
        },
        {
            href: "#",
            title: "DataTables",
            icon: <SiInstructables />
        },
        {
            href: "#",
            title: "Forms",
            icon: <FaWpforms />
        }
    ];

    const toggleMenuBtn = (name) => {
        if (activeTab.name === name && activeTab.visibility) {
            setActiveTab({ visibility: false, name: name });
        } else {
            setActiveTab({ visibility: true, name: name });
        }
    };

    return (
        <>
            <ul className="menu__categories">
                {link?.map((el, i) => {
                    return (
                        <li
                            className={
                                el.active
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
                                                toggleMenuBtn(el.title)
                                            }
                                        >
                                            {activeTab.name === el.title ? (
                                                activeTab.visibility ? (
                                                    <IoMdArrowDropdown />
                                                ) : (
                                                    <IoMdArrowDropup />
                                                )
                                            ) : (
                                                <IoMdArrowDropup />
                                            )}
                                        </div>
                                    ) : (
                                        <div className=""></div>
                                    )}
                                </div>
                            </a>
                            {activeTab.name === el.title ? (
                                el.submenu ? (
                                    <SubMenu
                                        visibility={activeTab.visibility}
                                        link={el.submenu}
                                    />
                                ) : null
                            ) : null}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
