import React from 'react'
import 'styles/dashboard/sales.scss'
import XCard from 'core/card/XCard.js'
import BarChart from 'components/charts/BarChart'

export default function Sales() {
    return (
        <div>
            <XCard title="Renevue" cardBody={<BarChart />} actions={true} />
        </div>
    )
}
