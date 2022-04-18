import React, { useEffect, useState } from 'react'
// import Pagination from '../components/pagination'
import Xtable from 'core/table/Xtable'
import axios from 'axios'
import 'styles/core/dataTable/dataTable.scss'

export default function XDataTable() {
    const [posts, setPosts] = useState([])
    const [perPage, setPerPage] = useState(5)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')

    const handleSelect = (e) => {
        setPerPage(e.target.value)
    }

    const handleActivePage = (num) => {
        setPage(num)
    }

    // const lastPage = page * perPage
    // const firstPage = lastPage - perPage
    // const curentPage = posts.slice(firstPage, lastPage)

    var tableTheme2 = {
        name: 'hoverTable',
        borderHead: '1px solid #191e3a',
        borderBody: '1px solid #191e3a',
        bgHead: null,
        bgBody: null,
    }

    const dataTable = {
        head: [
            {
                name: '#',
            },
            {
                name: 'Заголовок',
            },
            {
                name: 'Описание',
            },
            {
                name: 'Username',
            },
        ],
        body: [],
    }

    function sliceIntoChunks(arr, chunkSize) {
        const res = []
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize)
            res.push(chunk)
        }
        return res
    }

    const mapPosts = () => {
        const arr = sliceIntoChunks(posts, 3)
        arr?.forEach((el) => {
            dataTable.body.push(el)

            console.log('ffff', dataTable.body)
        })
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            setPosts(res.data)
        })
    }, [])

    useEffect(() => {
        mapPosts()
    }, [posts])

    return (
        <>
            <div className="home">
                <div className="container">
                    <div className="home__wrapper">
                        <div className="header_table">
                            <div className="search">
                                <input
                                    type="text"
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Поиск..."
                                />
                            </div>
                        </div>
                        <div className="table_list">
                            <Xtable data={dataTable} tableTheme={tableTheme2} />
                        </div>
                        <div className="paginate_wrapper">
                            <div className="select_wrapper">
                                <h4>Кол-во пост на странице: </h4>
                                <select
                                    className="form-select"
                                    onChange={handleSelect}
                                >
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                </select>
                            </div>
                            {/* <Pagination
                                perPage={perPage}
                                totalItems={posts.length - 1}
                                handleActivePage={handleActivePage}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
