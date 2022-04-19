import React from 'react'

import XDataTable from 'core/dataTable/XDataTable'
import XCard from 'core/card/XCard'

export default function DataTables() {
    return (
        <div className="mt-2">
            <XCard
                title="Data Tables"
                cardBody={<XDataTable />}
                actions={false}
            />
        </div>
    )
}
