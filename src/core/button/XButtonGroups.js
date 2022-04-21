import React from 'react'
import XButton from './XButton'

export default function XButtonGroups(params) {
    return (
        <div>
            <XButton name={'Left'} type={'dark'} />
            <XButton name={'Midle'} type={'dark'} />
            <XButton name={'Right'} type={'dark'} />
        </div>
    )
}
