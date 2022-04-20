import React from 'react'
import 'styles/core/elements/xalert.scss'

export default function XAlert({ type }) {
    return (
        <div className={'alert ' + 'alert-' + type}>
            Alert! Lorem Ipsum is simply dummy text of the printing.
            <span className="closebtn" onclick="">
                &times;
            </span>
        </div>
    )
}
