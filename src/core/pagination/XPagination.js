import React, { useState } from 'react'
import Pagination from 'react-js-pagination'
import 'styles/core/pagination/XPagination.scss'

export default function XPagination({ perPage, totalItems, handleActivePage }) {
    const [state, setState] = useState({
        activePage: 1,
    })

    const handlePageChange = (pageNumber) => {
        setState({ activePage: pageNumber })
        handleActivePage(pageNumber)
    }
    return (
        <div className="paginate">
            <Pagination
                activePage={state.activePage}
                itemsCountPerPage={Number(perPage)}
                totalItemsCount={totalItems}
                pageRangeDisplayed={4}
                onChange={handlePageChange.bind()}
            />
        </div>
    )
}
