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
                    className="dropdownItem"
                >
                    {el}
                </div>
            )
        })
    }

    return (
        <div>
            <div className="dropdownSelect" onClick={() => setShowList(true)}>
                <p className="selected">{selected}</p>
                <div className="dropdownSelectButton">
                    <FaChevronDown />
                </div>
            </div>
            <div
                className={(showList ? 'show' : '') + ' dropdownList'}
                onMouseLeave={() => setShowList(false)}
            >
                {getItems()}
            </div>
        </div>
    )
}

export default XSelect
