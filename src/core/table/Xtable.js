import React from 'react'
import 'styles/core/table/table.scss'

export default function Xtable({ data, tableTheme }) {
    return (
        <>
            <div class={`table-responsive ${tableTheme?.name}`}>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            {data?.head?.map((item, i) => {
                                return (
                                    <th
                                        key={item.name + i}
                                        style={{
                                            backgroundColor: tableTheme?.bgHead,
                                            border: tableTheme?.borderHead,
                                        }}
                                    >
                                        {item.name}
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {data?.body?.map((item, i) => {
                            return (
                                <tr key={i}>
                                    {item?.map((el) => {
                                        return (
                                            <td
                                                key={el.id + i}
                                                style={{
                                                    backgroundColor:
                                                        tableTheme?.bgBody,
                                                    border: tableTheme?.borderBody,
                                                }}
                                            >
                                                {el.title}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
