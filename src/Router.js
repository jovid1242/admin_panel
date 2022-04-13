import React from "react";
import { Routes, Route } from "react-router-dom";
import Sales from "./pages/Sales";
import Home from "./pages/Home";

export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="dashboard" element={<Sales />} />
            </Routes>
        </>
    );
}
