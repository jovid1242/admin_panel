import React from "react";
import Footer from "../footer/Footer";
import "../../styles/main/main.scss";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Router from "../../Router";

export default function Main() {
    return (
        <>
            <Header />
            <Sidebar />
            <div className="main">
                <div className="main_content">
                    <div className="layout">
                        <Router />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
