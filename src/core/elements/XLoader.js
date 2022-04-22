import React from 'react'
import 'styles/core/elements/xloader.scss'
import { RotatingLines, Oval } from 'react-loader-spinner'

export default function XLoader() {
    return (
        <div className="x-loader">
            <RotatingLines width="70" strokeColor="#fff" />
            <RotatingLines width="50" strokeColor="#fff" />
            <RotatingLines width="30" strokeColor="#fff" />
            <Oval
                ariaLabel="loading-indicator"
                height={70}
                width={70}
                strokeWidth={5}
                strokeWidthSecondary={2}
                color="#fff"
                secondaryColor="white"
            />
            <Oval
                ariaLabel="loading-indicator"
                height={50}
                width={50}
                strokeWidth={5}
                strokeWidthSecondary={2}
                color="#fff"
                secondaryColor="white"
            />
            <Oval
                ariaLabel="loading-indicator"
                height={30}
                width={30}
                strokeWidth={5}
                strokeWidthSecondary={2}
                color="#fff"
                secondaryColor="white"
            />
        </div>
    )
}
