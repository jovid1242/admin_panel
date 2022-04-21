import React from 'react'
import 'styles/core/button/xbutton.scss'
export default function XButton({ type, name, icon }) {
    return (
        <div className="btn">
            <button className={type}>
                {name} {icon}
            </button>
        </div>
    )
}
