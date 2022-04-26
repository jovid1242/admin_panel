import React from 'react'
import 'styles/core/card/xcards.scss'
import { FiDroplet } from 'react-icons/fi'

export default function XCards({ title, bodyText, icon, image }) {
    const getIcon = () => {
        if (icon) {
            return (
                <div className="card-icon">
                    <FiDroplet />
                </div>
            )
        }
        return ''
    }
    const getImage = () => {
        if (image) {
            return <div className="card-image"></div>
        }
    }

    return (
        <>
            <div className="card component-card_1">
                <div className="card-body">
                    {getIcon()}
                    {getImage()}
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{bodyText}</p>
                </div>
            </div>
        </>
    )
}
