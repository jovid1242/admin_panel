import React from 'react'
import 'styles/core/card/xcards.scss'
import { FiDroplet } from 'react-icons/fi'

export default function XCards({ title, bodyText, icon }) {
    const getIcon = () => {
        if (icon) {
            return <FiDroplet />
        }
        return ''
    }

    return (
        <>
            <div className="card component-card_1">
                <div className="card-body">
                    <div className="card-icon">{getIcon()}</div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{bodyText}</p>
                </div>
            </div>
        </>
    )
}
