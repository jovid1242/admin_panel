import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import Main from "../components/main/Main";

export default function Home() {
    return (
        <>
            <Header />
            <Sidebar />
            <Main />
        </>
    );
}
