import React, { useState } from 'react'
import SubMenu from '../submenu/SubMenu'
import { Link } from 'react-router-dom'
import { BiHomeAlt, BiChevronDown } from 'react-icons/bi'
import { RiApps2Line, RiTableLine } from 'react-icons/ri'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { CgComponents } from 'react-icons/cg'
import { SiInstructables, SiNuxtdotjs } from 'react-icons/si'
import { FaElementor, FaWpforms } from 'react-icons/fa'
import { MdFontDownload, MdOutlineWidgets, MdBackupTable } from 'react-icons/md'

export default function Menu() {
    const [activeTab, setActiveTab] = useState({
        visibility: false,
        name: null,
    })

    const link = [
        {
            href: '#',
            title: 'Dashboard',
            icon: <BiHomeAlt />,
            active: true,
            submenu: [
                {
                    href: '/dashboard',
                    title: 'Sales',
                },
                {
                    href: '/analytics',
                    title: 'Analytics',
                },
            ],
        },
        {
            href: '#',
            title: 'Apps',
            icon: <RiApps2Line />,
            submenu: [
                {
                    href: '/chat',
                    title: 'Chat',
                },
                {
                    href: '#',
                    title: 'Todo List',
                },
                {
                    href: '#',
                    title: 'Invoice',
                },
            ],
        },
        {
            href: '#',
            title: 'Components',
            icon: <CgComponents />,
            submenu: [
                {
                    href: '#',
                    title: 'Tabs',
                },
                {
                    href: '#',
                    title: 'Modals',
                },
                {
                    href: '#',
                    title: 'Cards',
                },
                {
                    href: '#',
                    title: 'Carousel',
                },
            ],
        },
        {
            href: '#',
            title: 'Elements',
            icon: <FaElementor />,
            submenu: [
                {
                    href: '/elements/alerts',
                    title: 'Alerts',
                },
                {
                    href: '/elements/avatar',
                    title: 'Avatar',
                },
                {
                    href: '/badges',
                    title: 'Badges',
                },
                {
                    href: '/breadcrumbs',
                    title: 'Breadcrumbs',
                },
                {
                    href: '/buttons',
                    title: 'Buttons',
                },
            ],
        },
        {
            href: '#',
            title: 'Fonts Icons',
            icon: <MdFontDownload />,
        },
        {
            href: '#',
            title: 'Widgets',
            icon: <MdOutlineWidgets />,
        },
        {
            href: '/table',
            title: 'Tables',
            icon: <RiTableLine />,
        },
        {
            href: '/dt-table',
            title: 'DataTables',
            icon: <MdBackupTable />,
        },
        {
            href: '#',
            title: 'Forms',
            icon: <FaWpforms />,
            submenu: [
                {
                    href: '/forms/basic',
                    title: 'Basic',
                },
            ],
        },
    ]

    const toggleMenuBtn = (name) => {
        if (activeTab.name === name && activeTab.visibility) {
            setActiveTab({ visibility: false, name: name })
        } else {
            setActiveTab({ visibility: true, name: name })
        }
    }

    return (
        <>
            <ul className="menu__categories">
                {link?.map((el, i) => {
                    return (
                        <li
                            className={
                                el.active
                                    ? 'menu_categories__list activeTabMenu'
                                    : 'menu_categories__list'
                            }
                            key={el.title + i}
                        >
                            <Link to={el.href} className="m_list">
                                <div
                                    className="list"
                                    onClick={() => toggleMenuBtn(el.title)}
                                >
                                    <div className="list_name">
                                        <div className="list_icon">
                                            {el.icon}
                                        </div>
                                        <span>{el.title}</span>
                                    </div>
                                    {el.submenu ? (
                                        <div className="list_vicon">
                                            {activeTab.name === el.title ? (
                                                activeTab.visibility ? (
                                                    <BiChevronDown />
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
                            </Link>
                            {activeTab.name === el.title ? (
                                el.submenu ? (
                                    <SubMenu
                                        visibility={activeTab.visibility}
                                        link={el.submenu}
                                    />
                                ) : null
                            ) : null}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
