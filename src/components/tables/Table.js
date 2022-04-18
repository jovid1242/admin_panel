import React from 'react'

import Xtable from 'core/table/Xtable'
import XCard from 'core/card/XCard'

export default function Table() {
    const dataTable = {
        head: [
            {
                name: 'Name',
            },
            {
                name: 'Shaun Park',
            },
            {
                name: 'Shaun',
            },
        ],
        body: [
            [
                {
                    title: 'Shaun Park',
                },
                {
                    title: 'Shaun Park',
                },
                {
                    title: 'Shaun Park',
                },
            ],
            [
                {
                    title: 'Shaun Park',
                },
                {
                    title: 'Shaun Park',
                },
                {
                    title: 'Shaun Park',
                },
            ],
            [
                {
                    title: 'Shaun Park',
                },
                {
                    title: 'Shaun Park',
                },
                {
                    title: 'Shaun Park',
                },
            ],
        ],
    }

    const tableTheme1 = {
        name: 'simpleTable',
        borderHead: '1px solid #191e3a',
        borderBody: '1px solid #191e3a',
        borderTop: null,
        bgHead: null,
        bgBody: null,
    }

    const tableTheme2 = {
        name: 'hoverTable',
        borderHead: '1px solid #191e3a',
        borderBody: '1px solid #191e3a',
        bgHead: null,
        bgBody: null,
    }

    const tableTheme3 = {
        name: 'stripedTable',
        borderHead: '1px solid #191e3a',
        borderBody: '1px solid #191e3a',
        bgHead: null,
        bgBody: null,
    }

    const tableTheme4 = {
        name: 'tableLight',
        borderHead: '1px solid #3b3f5c',
        borderBody: '1px solid #3b3f5c',
        bgHead: '#3b3f5c',
        bgBody: '#3b3f5c',
    }

    const tableTheme5 = {
        name: 'captions',
        borderHead: null,
        borderBody: null,
        bgHead: null,
        bgBody: null,
    }
    return (
        <>
            <div className="mt-2"></div>
            <div className="row">
                <div className="adm-col_12">
                    <XCard
                        title="Simple Table"
                        cardBody={
                            <Xtable data={dataTable} tableTheme={tableTheme1} />
                        }
                        actions={false}
                    />
                </div>
            </div>
            <div className="mt-2"></div>
            <div className="adm-col_12">
                <XCard
                    title="Hover Table"
                    cardBody={
                        <Xtable data={dataTable} tableTheme={tableTheme2} />
                    }
                    actions={false}
                />
            </div>
            <div className="mt-2"></div>
            <div className="adm-col_12">
                <XCard
                    title="Striped Table"
                    cardBody={
                        <Xtable data={dataTable} tableTheme={tableTheme3} />
                    }
                    actions={false}
                />
            </div>
            <div className="mt-2"></div>
            <div className="adm-col_12">
                <XCard
                    title="Table Light"
                    cardBody={
                        <Xtable data={dataTable} tableTheme={tableTheme4} />
                    }
                    actions={false}
                />
            </div>
            <div className="mt-2"></div>
            <div className="adm-col_12">
                <XCard
                    title="Captions"
                    cardBody={
                        <Xtable data={dataTable} tableTheme={tableTheme5} />
                    }
                    actions={false}
                />
            </div>
        </>
    )
}
