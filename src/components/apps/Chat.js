import React from "react";
import Card from "../card/Card";
import {
    BiSearchAlt,
    BiPhoneCall,
    BiDotsVerticalRounded
} from "react-icons/bi";
import { FiVideo, FiSend } from "react-icons/fi";
import userAva from "../../assets/img/chat/4.jpg";
import "../../styles/apps/chat/chat.scss";

export default function Chat() {
    const dataUser = [
        {
            id: new Date().getTime(),
            name: "jovid",
            preMess: "How do you like my chat",
            avatar: userAva,
            date: new Date()
        },
        {
            id: new Date().getTime(),
            name: "jovid",
            preMess: "How do you like my chat",
            avatar: userAva,
            date: new Date()
        },
        {
            id: new Date().getTime(),
            name: "jovid",
            preMess: "How do you like my chat",
            avatar: userAva,
            date: new Date()
        },
        {
            id: new Date().getTime(),
            name: "jovid",
            preMess: "How do you like my chat",
            avatar: userAva,
            date: new Date()
        },
        {
            id: new Date().getTime(),
            name: "jovid",
            preMess: "How do you like my chat",
            avatar: userAva,
            date: new Date()
        },
        {
            id: new Date().getTime(),
            name: "jovid",
            preMess: "How do you like my chat",
            avatar: userAva,
            date: new Date()
        },
        {
            id: new Date().getTime(),
            name: "jovid",
            preMess: "How do you like my chat",
            avatar: userAva,
            date: new Date()
        },
        {
            id: new Date().getTime(),
            name: "jovid",
            preMess: "How do you like my chat",
            avatar: userAva,
            date: new Date()
        }
    ];
    return (
        <div className="chat-section">
            <div className="row">
                <div className="adm-col_12">
                    <Card
                        height="400px"
                        content={
                            <div className="chat">
                                <div className="chat__users">
                                    <div className="chat__header">
                                        <form action="">
                                            <div className="chat__search-group">
                                                <BiSearchAlt
                                                    width={"20px"}
                                                    height={"20px"}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Search"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <ul
                                        className="users"
                                        style={{ height: "350px" }}
                                    >
                                        {dataUser?.map((el, i) => {
                                            return (
                                                <li
                                                    className="user"
                                                    key={el.id + i}
                                                >
                                                    <div className="user__info">
                                                        <div className="user__avatar">
                                                            <img
                                                                src={el.avatar}
                                                                alt="userAva"
                                                            />
                                                        </div>
                                                        <div className="__text">
                                                            <p className="user__name">
                                                                {el.name}
                                                            </p>
                                                            <p className="user__mess">
                                                                {el.preMess} PM
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="data__mes">
                                                        <p>
                                                            {el.date.getHours()}{" "}
                                                            :{" "}
                                                            {el.date.getMinutes()}{" "}
                                                            PM
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="chat__meta">
                                    <div className="chat__meta-head">
                                        <div className="chat__meta-user">
                                            <div className="chat__user-info">
                                                <img
                                                    src={userAva}
                                                    alt="userAva"
                                                />
                                                <p className="user-name">
                                                    Jovid
                                                </p>
                                            </div>
                                            <div className="chat__action">
                                                <BiPhoneCall />
                                                <FiVideo />
                                                <BiDotsVerticalRounded />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="chat__main">
                                        <div className="chat__main-wrapper">
                                            <div className="bubble me">
                                                <div className="p">
                                                    <p>Hello gays</p>
                                                </div>
                                            </div>
                                            <div className="bubble you">
                                                <div className="p">
                                                    <p>Hello gays</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat__footer">
                                        <form action="">
                                            <div className="mess__group">
                                                <input
                                                    type="text"
                                                    placeholder="Message"
                                                />
                                                <FiSend />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
}
