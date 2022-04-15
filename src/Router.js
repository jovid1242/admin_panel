import React from "react";
import { Routes, Route } from "react-router-dom";
import Sales from "./pages/Sales";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Chat from "./pages/Chat";

export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Sales />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </>
    );
}
