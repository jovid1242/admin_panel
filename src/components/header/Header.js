import React from 'react'
import '../../styles/header/header.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiSearch } from 'react-icons/bi'
import { MdLanguage } from 'react-icons/md'
import { FiMail } from 'react-icons/fi'
import { RiNotification2Line } from 'react-icons/ri'
import XSelect from '../../core/select/XSelect'

const selectItems = ['Settings', 'Mail', 'Print', 'Download', 'Share']

export default function Header() {
    return (
        <div className="wrapper">
            <header className="">
                <div className="headerTop fixedTop">
                    <div className="headerLeft">
                        <ul className="logo">
                            <li className="logoImg">
                                <img
                                    width={34}
                                    height={34}
                                    src="/img/logo.svg"
                                    alt="icon"
                                />
                            </li>
                            <li className="logoText">
                                <a href="/" className="logoText">
                                    Cork
                                </a>
                            </li>
                        </ul>
                        <ul className="searchBox">
                            <li className="searchIcon">
                                <BiSearch />
                                <form className="searchForm">
                                    <div className="searchInput">
                                        <input
                                            type="search"
                                            className="searchControl"
                                            placeholder="Search..."
                                        ></input>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                    <ul className="headerRight">
                        <li className="icons">
                            <a href="/">
                                <MdLanguage />
                            </a>
                        </li>
                        <li className="icons">
                            <a href="/">
                                <FiMail />
                            </a>
                        </li>
                        <li className="icons">
                            <a href="/">
                                <RiNotification2Line />
                            </a>
                        </li>
                        <li className="userAva">
                            <a href="/">
                                <img
                                    width={28}
                                    height={28}
                                    src="/img/profile-16.jpeg"
                                    alt="user avatar"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <div className="bottomMenu">
                <header className="bottomHeader">
                    <div className="bottomLeft">
                        <div className="bottomBtn">
                            <a href="/" className="burgerButton">
                                <GiHamburgerMenu width={20} height={20} />
                            </a>
                        </div>
                        <h3 className="bottomTitle">Dashboard / Sales</h3>
                    </div>
                    <div className="bottomRight">
                        <XSelect items={selectItems} />
                    </div>
                </header>
            </div>
        </div>
    )
}
