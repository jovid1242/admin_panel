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
        <div className="card">
            <div className="card-header">
                <div className="card-header__title">
                    <h5>{title}</h5>
                </div>
                <div className="card-actions">{getActions()}</div>
            </div>
            <div className="card-body">{cardBody}</div>
        </div>
    )
}
