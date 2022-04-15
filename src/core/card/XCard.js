import { React } from 'react'
import 'styles/core/card/xcard.scss'

import BarChart from 'components/BarChart'
import XDropdownMenu from 'core/dropdown/XDropdownMenu'

export default function XCard() {
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-header__title">
                    <h5>Renevue</h5>
                </div>
                <div className="card-actions">
                    <XDropdownMenu items={['Delete', 'Update']} />
                </div>
            </div>
            <div className="card-body">
                <BarChart />
            </div>
        </div>
    )
}
