import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import '../../styles/core/select/select.scss'

function XSelect({ items, defaultItem, onChange }) {
    defaultItem = defaultItem || items[0]
    const [selected, setSelected] = useState(defaultItem)
    const [showList, setShowList] = useState(false)

    const setSelectedItem = (item) => {
        setSelected(item)
        if (onChange) {
            onChange(item)
        }
        setShowList(false)
    }

    const getItems = () => {
        return items?.map((el) => {
            return (
                <div
                    onClick={() => setSelectedItem(el)}
                    className="option"
                    key={el}
                >
                    {el}
                </div>
            )
        })
    }

    return (
        <div className="select">
            <div className="select-content" onClick={() => setShowList(true)}>
                <p className="selected">{selected}</p>
                <div className="select-button">
                    <FaChevronDown />
                </div>
            </div>
            <div
                className={(showList ? 'show' : '') + ' options'}
                onMouseLeave={() => setShowList(false)}
            >
                {getItems()}
            </div>
        </div>
    )
}

export default XSelect
