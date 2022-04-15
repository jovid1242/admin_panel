import React from "react";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../../styles/submenu/submenu.scss";

export default function SubMenu({ visibility, link }) {
    return (
        <>
            <div className={!visibility ? "submenu d-none" : "submenu"}>
                <ul className="submenu__list ">
                    {link?.map((el, i) => {
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
}
