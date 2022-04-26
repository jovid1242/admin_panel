import { React } from 'react'
import 'styles/core/card/xcard.scss'
import XDropdownMenu from 'core/dropdown/XDropdownMenu'

export default function XCard({ cardBody, title, actions }) {
    const getActions = () => {
        if (actions) {
            return <XDropdownMenu items={['Delete', 'Update']} />
        }
        return ''
    }
    return (
        <div className="block">
            <div className="block-header">
                <div className="block-header__title">
                    <h5>{title}</h5>
                </div>
                <div className="block-actions">{getActions()}</div>
            </div>
            <div className="block-body">{cardBody}</div>
        </div>
    )
}
