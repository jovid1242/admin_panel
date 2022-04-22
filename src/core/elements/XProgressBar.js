import React from 'react'
import 'styles/core/elements/xprogressbar.scss'

export default function XProgressBar({
    type,
    progressType,
    width,
    progressWidth,
}) {
    return (
        <div className={'progress-bar ' + type + ' ' + width}>
            <div
                className={'primary-bar ' + progressType + ' ' + progressWidth}
            ></div>
        </div>
    )
}
