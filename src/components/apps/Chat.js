import React, { useState } from "react";
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
    const [textSearch, setTextSearch] = useState("");
    const [mess, setMess] = useState([
        {
            text: "How are you?"
        }
    ]);
    const [text, setText] = useState("");
    const dataUser = [
        {
            id: new Date().getTime(),
            name: "Jovid",
            preMess: "How do you like my chat",
            avatar: userAva,
            date: new Date()
        },
        {
            id: new Date().getTime(),
            name: "Maria",
            preMess: "How do you like my chat",
            avatar: userAva,
            date: new Date()
        },
        {
            id: new Date().getTime(),
            name: "Jhon",
            preMess: "How do you like my chat",
            avatar: userAva,
            date: new Date()
        },
        {
            id: new Date().getTime(),
            name: "Toms",
            preMess: "How do you like my chat",
            avatar: userAva,
            date: new Date()
        },
        {
            id: new Date().getTime(),
            name: "David",
            preMess: "How do you like my chat",
            avatar: userAva,
            date: new Date()
        },
        {
            id: new Date().getTime(),
            name: "Alina",
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

    const searchUser = dataUser?.filter((val) => {
        if (!textSearch === "") {
            return val;
        } else if (val.name?.toLowerCase().includes(textSearch.toLowerCase())) {
            return val;
        }
    });

    console.log("searchUser", searchUser);

    const handleSearch = (e) => {
        setTextSearch(e.target.value);
    };

    const sandMessage = (e) => {
        e.preventDefault();
        setMess((prev) => [...prev, { text: text }]);
        setText("");
    };

    return (
        <div className="chat-section">
            <div className="row">
                <div className="adm-col_12">
                    <Card
                        height="70vh"
                        content={
                            <div className="chat">
                                <div className="chat__users">
                                    <div className="chat__header">
                                        <form onSubmit={sandMessage}>
                                            <div className="chat__search-group">
                                                <BiSearchAlt
                                                    width={"20px"}
                                                    height={"20px"}
                                                />
                                                <input
                                                    type="text"
                                                    onChange={handleSearch}
                                                    placeholder="Search"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <ul
                                        className="users"
                                        style={{ height: "60vh" }}
                                    >
                                        {!searchUser.length ? (
                                            <center>
                                                <p className="not_found">
                                                    User is not found
                                                </p>
                                            </center>
                                        ) : (
                                            searchUser?.map((el, i) => {
                                                return (
                                                    <li
                                                        className="user"
                                                        key={el.id + i}
                                                    >
                                                        <div className="user__info">
                                                            <div className="user__avatar">
                                                                <img
                                                                    src={
                                                                        el.avatar
                                                                    }
                                                                    alt="userAva"
                                                                />
                                                            </div>
                                                            <div className="__text">
                                                                <p className="user__name">
                                                                    {el.name}
                                                                </p>
                                                                <p className="user__mess">
                                                                    {el.preMess}{" "}
                                                                    PM
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
                                            })
                                        )}
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
                                            <div className="bubble you">
                                                <div className="p">
                                                    <p>
                                                        Hi, I am back from
                                                        vacation
                                                    </p>
                                                </div>
                                            </div>
                                            {mess?.map((el, i) => {
                                                return (
                                                    <div
                                                        className="bubble me"
                                                        key={el.text + i}
                                                    >
                                                        <div className="p">
                                                            <p>{el.text}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="chat__footer">
                                        <form onSubmit={sandMessage}>
                                            <div className="mess__group">
                                                <input
                                                    type="text"
                                                    value={text}
                                                    onChange={(e) =>
                                                        setText(e.target.value)
                                                    }
                                                    placeholder="Message"
                                                />
                                                <FiSend
                                                    onClick={(e) =>
                                                        sandMessage(e)
                                                    }
                                                />
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
