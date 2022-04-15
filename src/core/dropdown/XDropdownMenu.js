import React, { useState } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import 'styles/core/dropdown/xdropdown.scss'

function XDropdownMenu({ items, onChange }) {
    const [showList, setShowList] = useState(false)

    const getItems = () => {
        return items?.map((el) => {
            return (
                <p
                    className="x-dropdown-menu__item"
                    onClick={() => setSelectedItem(el)}
                    key={el}
                >
                    {el}
                </p>
            )
        })
    }

    const setSelectedItem = (item) => {
        if (onChange) {
            onChange(item)
        }
        setShowList(false)
    }

    return (
        <div className="x-dropdown" onClick={() => setShowList(!showList)}>
            <span>
                <HiDotsHorizontal />
            </span>
            <div
                className={(showList ? 'show' : '') + ' x-dropdown-menu'}
                onMouseLeave={() => setShowList(false)}
            >
                {getItems()}
            </div>
        </div>
    )
}

export default XDropdownMenu
