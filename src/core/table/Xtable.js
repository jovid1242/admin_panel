import React from 'react'
import 'styles/core/table/table.scss'

export default function Xtable({ data, tableTheme, search }) {
    return (
        <>
            <div class={`table-responsive ${tableTheme?.name}`}>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            {data?.head?.map((item, i) => {
                                return (
                                    <th
                                        key={item.rus + i}
                                        style={{
                                            backgroundColor: tableTheme?.bgHead,
                                            border: tableTheme?.borderHead,
                                        }}
                                    >
                                        {item.rus}
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {data?.body
                            ?.filter((val) => {
                                if (!search === '') {
                                    return val
                                } else if (
                                    val.title
                                        ?.toLowerCase()
                                        .includes(search?.toLowerCase())
                                ) {
                                    return val
                                }
                            })
                            .map((item, i) => {
                                return (
                                    <tr key={item?.id + i}>
                                        <td
                                            style={{
                                                backgroundColor:
                                                    tableTheme?.bgBody,
                                                border: tableTheme?.borderBody,
                                            }}
                                        >
                                            {i + 1}
                                        </td>
                                        <td
                                            key={item.id && item.title + i}
                                            style={{
                                                backgroundColor:
                                                    tableTheme?.bgBody,
                                                border: tableTheme?.borderBody,
                                            }}
                                        >
                                            {item.title}
                                        </td>
                                        <td
                                            key={item.id && item.title + i}
                                            style={{
                                                backgroundColor:
                                                    tableTheme?.bgBody,
                                                border: tableTheme?.borderBody,
                                            }}
                                        >
                                            {item.body}
                                        </td>
                                        <td
                                            key={item.id && item.title + i}
                                            style={{
                                                backgroundColor:
                                                    tableTheme?.bgBody,
                                                border: tableTheme?.borderBody,
                                            }}
                                        >
                                            {item.userId}
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
