import React from 'react'
import Footer from 'components/footer/Footer'
import 'styles/main/main.scss'
import Header from 'components/header/Header'
import Sidebar from 'components/sidebar/Sidebar'
import Router from 'Router'

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
    )
}
