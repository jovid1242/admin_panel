import React from 'react'
import 'styles/core/elements/xsearch.scss'
import { FiSearch } from 'react-icons/fi'

export default function XSearch({ type }) {
    return (
        <>
            <div className={type}>
                <div className="search">
                    <input placeholder="Search Attendies..."></input>
                    <span className="search-icon">
                        <a href="">
                            <FiSearch />
                        </a>
                    </span>
                </div>
            </div>
        </>
    )
}
