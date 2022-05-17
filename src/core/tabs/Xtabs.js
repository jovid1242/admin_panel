import React, { useState, useEffect } from 'react'
import XCard from 'core/card/XCard'
import 'styles/core/tabs/xtabs.scss'

export default function Xtabs({ tabs, type, icon, titleTab }) {
    const [activeTab, setActiveTab] = useState({
        title: null,
        content: null,
        disable: false,
    })

    const hadnleActiveTab = (item) => {
        if (!item.disable) {
            setActiveTab({
                title: item.title,
                content: item.content,
                disable: item.disable,
            })
        }
        return
    }

    useEffect(() => {
        setActiveTab({
            title: tabs[0].title,
            content: tabs[0].content,
            disable: tabs[0].disable,
        })
    }, [])

    return (
        <>
            <XCard
                title={titleTab}
                cardBody={
                    <div className={'xtabs ' + type}>
                        <ul className="nav nav-tabs" role="tablist">
                            {tabs?.map((item, i) => {
                                return (
                                    <li
                                        className="nav-item"
                                        key={item.title + i}
                                        onClick={() => hadnleActiveTab(item)}
                                    >
                                        <div
                                            className={
                                                activeTab.title === item.title
                                                    ? 'nav-link active'
                                                    : !item.disable
                                                    ? 'nav-link'
                                                    : 'nav-link disabled'
                                            }
                                            href="#"
                                        >
                                            {icon ? (
                                                <div className="tab-icon">
                                                    {item?.icon}
                                                </div>
                                            ) : null}{' '}
                                            {item.title}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="tab-content">
                            <p>{activeTab?.content}</p>
                        </div>
                    </div>
                }
                actions={false}
            />
        </>
    )
}
