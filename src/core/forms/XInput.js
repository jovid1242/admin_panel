import React, { useState } from 'react'
import 'styles/core/basic/xinput.scss'

export default function XInput(props) {
    const getLabel = () => {
        if (props.label) {
            return <label className="xinput_title">{props.label}</label>
        }
    }
    return (
        <div>
            <div className="xinput_form">
                {getLabel()}
                <input
                    className="xinput_input"
                    placeholder={props.placeholder}
                    onChange={(event) => props.onChange(event)}
                    name={props.name}
                    type={props.type}
                ></input>
            </div>
        </div>
    )
}
