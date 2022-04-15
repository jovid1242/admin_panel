import React from 'react'
import '../../styles/dashboard/sales.scss'
import BarChart from '../BarChart.js'
import XDropdownMenu from 'core/dropdown/XDropdownMenu'

export default function Sales() {
    return (
        <div>
            <div className="row">
                <div className="renevue adm-col_8">
                    <div className="renevueHeadline">
                        <p>Renevue</p>
                        <XDropdownMenu items={['Delete', 'Update']} />
                    </div>
                    <div className="barChart">
                        <BarChart />
                    </div>
                </div>
            </div>
        </div>
    )
}
