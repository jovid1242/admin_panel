import React from 'react'
import 'styles/core/elements/xbadges.scss'

export default function XBadges({ type, name }) {
    return (
        <div>
            <div className={'badge ' + type}>{name}</div>
        </div>
    )
}
