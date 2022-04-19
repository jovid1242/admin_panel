import React, { useEffect, useState } from 'react'
import XPagination from 'core/pagination/XPagination'
import XSelect from 'core/select/XSelect'
import XInput from 'core/forms/XInput'
import Xtable from 'core/table/Xtable'
import axios from 'axios'
import 'styles/core/dataTable/dataTable.scss'

const selectItems = [5, 10, 20]

export default function XDataTable() {
    const [perPage, setPerPage] = useState(5)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')

    const [dataTableHead, setDataTableHead] = useState([
        {
            rus: '#',
            eng: 'id',
        },
        { rus: 'Заголовок', eng: 'title' },
        {
            rus: 'Описание',
            eng: 'body',
        },
        {
            rus: 'User-ID',
            eng: 'userId',
        },
    ])
    const [dataTableBody, setDataTableBody] = useState([])

    const handleActivePage = (num) => {
        setPage(num)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            setDataTableBody(res.data)
        })
    }, [])

    const lastPage = page * perPage
    const firstPage = lastPage - perPage
    const curentPage = dataTableBody.slice(firstPage, lastPage)

    const dataTable = {
        head: dataTableHead,
        body: curentPage,
    }

    var tableTheme2 = {
        name: 'hoverTable',
        borderHead: '1px solid #191e3a',
        borderBody: '1px solid #191e3a',
        bgHead: null,
        bgBody: null,
    }

    return (
        <>
            <div className="xdata-table">
                <div className="table__wrapper">
                    <div className="table__wrapper-head">
                        <div className="search">
                            <XInput
                                name="text"
                                placeholder="Поиск..."
                                onChange={(e) => handleSearch(e)}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="xdata-table__table">
                        <Xtable
                            data={dataTable}
                            tableTheme={tableTheme2}
                            search={search}
                        />
                    </div>
                    <div className="paginate_wrapper">
                        <div className="select_wrapper">
                            <h4>Показ страницы: </h4>
                            <XSelect
                                items={selectItems}
                                onChange={(e) => setPerPage(e)}
                            />
                        </div>
                        <XPagination
                            perPage={perPage}
                            totalItems={dataTableBody.length - 1}
                            handleActivePage={handleActivePage}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
