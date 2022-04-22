import React from 'react'
import 'styles/core/elements/xprogressbar.scss'

export default function XProgressBar(props) {
    const getLabel = () => {
        if (props.label) {
            return <label>{props.label}</label>
        }
    }

    const getSecondLabel = () => {
        if (props.secondLabel) {
            return <label>{props.secondLabel}</label>
        }
    }

    const getSizeCode = () => {
        if (props.sizeCode) {
            return <span className="size-code">{props.sizeCode}</span>
        }
    }

    return (
        <>
            {getSizeCode()}
            <div
                className={
                    'progress-bar ' +
                    props.size +
                    ' ' +
                    props.type +
                    ' ' +
                    props.width
                }
            >
                <div
                    className={
                        'bar ' + props.progressType + ' ' + props.progressWidth
                    }
                >
                    {getLabel()}
                    {getSecondLabel()}
                </div>
            </div>
        </>
    )
}
