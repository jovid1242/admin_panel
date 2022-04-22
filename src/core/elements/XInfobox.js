import React from 'react'
import 'styles/core/elements/xinfobox.scss'
import { HiOutlineCube, HiArrowNarrowRight } from 'react-icons/hi'

export default function XInfobox({ type }) {
    return (
        <div>
            <div className={type}>
                <div className="info-icon">
                    <HiOutlineCube />
                </div>
                <h5 className="info-heading">Layout Package</h5>
                <p className="info-text">
                    Lorem ipsum dolor sit amet, labore et dolore magna aliqua.
                </p>
                <div className="info-link">
                    <a href="">
                        Discover <HiArrowNarrowRight />
                    </a>
                </div>
            </div>
        </div>
    )
}
