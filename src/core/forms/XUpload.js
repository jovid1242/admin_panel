import React, { useRef } from 'react'
import 'styles/core/basic/xupload.scss'

export default function XUpload(props) {
    const inputEl = useRef(null)
    const uploadHandler = () => {
        inputEl.current.click()
    }
    return (
        <div className="xupload_custom" onClick={uploadHandler}>
            <span className="xupload_title">{props.title}</span>
            <input
                ref={inputEl}
                className="xupload_input"
                placeholder={props.placeholder}
                onChange={(event) => props.onChange(event)}
                name={props.name}
                type={props.type}
            ></input>
            <span className="xupload_btn">{props.button}</span>
        </div>
    )
}
