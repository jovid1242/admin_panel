import React from "react";
import "../../styles/header/header.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";

export default function Header() {
    return (
        <div className="wrapper">
            <header>
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
                            <a href="#" className="logoText">
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
                        <a href="#">
                            <img
                                width={22}
                                height={22}
                                src="/img/lang.png"
                                alt="language"
                            ></img>
                        </a>
                    </li>
                    <li className="icons">
                        <a href="#">
                            <img
                                width={22}
                                height={22}
                                src="/img/mail.png"
                                alt="mail icon"
                            ></img>
                        </a>
                    </li>
                    <li className="icons">
                        <a href="#">
                            <img
                                width={22}
                                height={22}
                                src="/img/not.png"
                                alt="notification"
                            ></img>
                        </a>
                    </li>
                    <li className="userAva">
                        <a href="#">
                            <img
                                width={22}
                                height={22}
                                src="/img/ava.png"
                                alt="user avatar"
                            ></img>
                        </a>
                    </li>
                </ul>
            </header>
            <div className="bottomMenu">
                <header className="bottomHeader">
                    <div className="bottomLeft">
                        <div className="bottomBtn">
                            <a href="#" className="burgerButton">
                                <GiHamburgerMenu width={20} height={20} />
                            </a>
                        </div>
                        <h3 className="bottomTitle">Dashboard / Sales</h3>
                    </div>
                    <div className="bottomRight">
                        <div className="dropdownSelect">
                            <span className="select">Selttings</span>
                            <div className="dropdownSelectButton">
                                <img
                                    width={13}
                                    height={13}
                                    src="/img/select.png"
                                    className="selectIcon"
                                    alt="icon"
                                ></img>
                            </div>
                        </div>
                        <div className="dropdownList">
                            <div className="dropdownItem">Settings</div>
                            <div className="dropdownItem">Mail</div>
                            <div className="dropdownItem">Print</div>
                            <div className="dropdownItem">Download</div>
                            <div className="dropdownItem">Share</div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}
