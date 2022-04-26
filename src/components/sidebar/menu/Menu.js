import React, { useEffect, useState } from 'react'
import SubMenu from '../submenu/SubMenu'
import { useLocation, Link } from 'react-router-dom'
import { BiHomeAlt, BiChevronDown } from 'react-icons/bi'
import { RiApps2Line, RiTableLine } from 'react-icons/ri'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { CgComponents } from 'react-icons/cg'
import { SiInstructables, SiNuxtdotjs } from 'react-icons/si'
import { FaElementor, FaWpforms } from 'react-icons/fa'
import { MdFontDownload, MdOutlineWidgets, MdBackupTable } from 'react-icons/md'

export default function Menu() {
    const location = useLocation()
    const [activeTab, setActiveTab] = useState({
        visibility: false,
        name: null,
    })

    const [menuList, setMenuList] = useState()

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
            active: false,
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
            active: false,
            submenu: [
                {
                    href: '/components/tabs',
                    title: 'Tabs',
                },
                {
                    href: '#',
                    title: 'Modals',
                },
                {
                    href: '/components/cards',
                    title: 'Cards',
                },
                {
                    href: '#',
                    title: 'Carousel',
                },
                {
                    href: '#',
                    title: 'Block UI',
                },
                {
                    href: '#',
                    title: 'Countdown',
                },
                {
                    href: '#',
                    title: 'Counter',
                },
                {
                    href: '#',
                    title: 'Sweet Alerts',
                },
                {
                    href: '#',
                    title: 'Timeline',
                },
                {
                    href: '#',
                    title: 'Notifications',
                },
                {
                    href: '#',
                    title: 'Session Timeout',
                },
                {
                    href: '#',
                    title: 'Media Object',
                },
                {
                    href: '#',
                    title: 'List Group',
                },
                {
                    href: '#',
                    title: 'Pricing Tables',
                },
                {
                    href: '#',
                    title: 'Lightbox',
                },
            ],
        },
        {
            href: '#',
            title: 'Elements',
            icon: <FaElementor />,
            active: false,
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
                    href: '/elements/badges',
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
                {
                    href: '/elements/button-groups',
                    title: 'Button Groups',
                },
                {
                    href: '/elements/color-library',
                    title: 'Color Library',
                },
                {
                    href: '/elements/dropdown',
                    title: 'Dropdown',
                },
                {
                    href: '/elements/infobox',
                    title: 'Infobox',
                },
                {
                    href: '/elements/jumbotron',
                    title: 'Jumbotron',
                },
                {
                    href: '/elements/loader',
                    title: 'Loader',
                },
                {
                    href: '/elements/pagination',
                    title: 'Pagination',
                },
                {
                    href: '/elements/popovers',
                    title: 'Popovers',
                },
                {
                    href: '/elements/progress-bar',
                    title: 'Progress Bar',
                },
                {
                    href: '/elements/search',
                    title: 'Search',
                },
                {
                    href: '/elements/tooltips',
                    title: 'Tooltips',
                },
                {
                    href: '/elements/treeview',
                    title: 'Treeview',
                },
                {
                    href: '/elements/typography',
                    title: 'Typography',
                },
            ],
        },
        {
            href: '#',
            title: 'Fonts Icons',
            icon: <MdFontDownload />,
            active: false,
        },
        {
            href: '#',
            title: 'Widgets',
            icon: <MdOutlineWidgets />,
            active: false,
        },
        {
            href: '/tables',
            title: 'Tables',
            icon: <RiTableLine />,
            active: false,
        },
        {
            href: '/dataTables',
            title: 'DataTables',
            icon: <MdBackupTable />,
            active: false,
        },
        {
            href: '#',
            title: 'Forms',
            icon: <FaWpforms />,
            active: false,
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

    const userParams = location.pathname.split('/')[1]

    useEffect(() => {
        setMenuList(link)
    }, [])

    return (
        <>
            <ul className="menu__categories">
                {menuList?.map((el, i) => {
                    return (
                        <li
                            className={
                                el.title.toLowerCase() == userParams
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
