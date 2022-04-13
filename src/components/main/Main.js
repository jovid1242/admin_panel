import React from "react";
import Footer from "../footer/Footer";
import "../../styles/main/main.scss";

export default function Main() {
    return (
        <div className="main">
            <div className="main_content">
                <div className="layout"></div>
                <Footer />
            </div>
        </div>
    );
}
