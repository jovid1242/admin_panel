import React from "react";
import { BsDot } from "react-icons/bs";
import "../../../styles/submenu/submenu.scss";

export default function SubMenu({ visibility }) {
    return (
        <>
            <div className={visibility ? "submenu d-none" : "submenu"}>
                <ul className="submenu__list ">
                    <li>
                        <a href="#">
                            <BsDot /> Sale
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <BsDot /> Sale
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
