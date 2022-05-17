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
import ButtonGroups from 'components/elements/ButtonGroups'
import ColorLibrary from 'pages/elements/ColorLibrary'
import Infobox from 'pages/elements/Infobox'
import Loader from 'pages/elements/Loader'
import XPagination from 'core/pagination/XPagination'
import Tabs from 'pages/components/Tabs'
import ProgressBar from 'pages/elements/ProgressBar'
import Search from 'pages/elements/Search'
import Cards from 'pages/components/Cards'

export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Sales />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/elements/buttons" element={<Buttons />} />
                <Route path="/forms/basic" element={<Basic />} />
                <Route path="/tables" element={<Table />} />
                <Route path="/elements/alerts" element={<Alerts />} />
                <Route path="/dataTables" element={<DataTables />} />
                <Route path="/elements/avatar" element={<Avatar />} />
                <Route path="/elements/badges" element={<Badges />} />
                <Route
                    path="/elements/button-groups"
                    element={<ButtonGroups />}
                />
                <Route
                    path="/elements/color-library"
                    element={<ColorLibrary />}
                />
                <Route path="/elements/infobox" element={<Infobox />} />
                <Route path="/elements/loader" element={<Loader />} />
                <Route path="/elements/pagination" element={<XPagination />} />
                <Route
                    path="/elements/progress-bar"
                    element={<ProgressBar />}
                />
                <Route path="/elements/search" element={<Search />} />
                {/* Components  */}
                <Route path="/components/tabs" element={<Tabs />} />
                <Route path="/components/cards" element={<Cards />} />
            </Routes>
        </>
    )
}
