import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sales from './pages/Sales'
import Home from './pages/Home'
import Analytics from './pages/Analytics'
import Chat from './pages/Chat'
import Buttons from './pages/Buttons'
import Basic from 'pages/basic/Basic'
import Table from 'pages/Table'
import Alerts from 'pages/elements/Alerts'
import DataTables from 'pages/DataTables'
import Avatar from 'pages/elements/Avatar'
import Badges from 'pages/elements/Badges'

export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Sales />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/buttons" element={<Buttons />} />
                <Route path="/forms/basic" element={<Basic />} />
                <Route path="/table" element={<Table />} />
                <Route path="/elements/alerts" element={<Alerts />} />
                <Route path="/dt-table" element={<DataTables />} />
                <Route path="/elements/avatar" element={<Avatar />} />
                <Route path="/elements/badges" element={<Badges />} />
            </Routes>
        </>
    )
}
