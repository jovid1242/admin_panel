import React from 'react'
import 'styles/core/elements/xcolorlibrary.scss'

export default function XColorLibrary({ type, title, palette }) {
    return (
        <div className="color-box">
            <span className={'color-example ' + type}></span>
            <div className="color-describtion">
                <h5 className="color-title">{title}</h5>
                <span>{palette}</span>
            </div>
        </div>
    )
}
