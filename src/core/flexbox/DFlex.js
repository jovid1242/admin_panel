import React from 'react'
import 'styles/flexbox/dflex.scss'

export default function DFlex({ flexContent, type }) {
    return <div className={type}>{flexContent}</div>
}
