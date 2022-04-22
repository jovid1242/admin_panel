import React, { useState } from 'react'
import 'styles/core/elements/xtag.scss'

export default function XTag() {
    const [tags, setTags] = useState(['tagone', 'tagsecond', 'tagthird'])

    function handleKeyDonw(event) {
        if (event.key !== 'Enter') return
        const value = event.target.value
        if (!value.trim()) return
        setTags([...tags, value])
        event.target.value = ''
    }

    function removeTag(index) {
        setTags(tags.filter((elem, i) => i !== index))
    }

    return (
        <div>
            <div className="tags-container">
                {/* <div className="tag">
                    dcsdscdssd
                    <span>&times;</span>
                </div> */}
                {tags.map((tag, index) => (
                    <div className="tag" key={index}>
                        {tag}
                        <span onClick={() => removeTag(index)}>&times;</span>
                    </div>
                ))}
            </div>
            <div className="tags-input">
                <input
                    onKeyDown={handleKeyDonw}
                    placeholder="Type Some Tag..."
                />
            </div>
        </div>
    )
}
