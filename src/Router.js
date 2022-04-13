import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";

export default function AdminRouter() {
    return (
        <>
            <Header />
            <Sidebar />
            <Main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Main>
        </>
    );
}
