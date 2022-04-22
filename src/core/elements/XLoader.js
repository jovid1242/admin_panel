import React from 'react'
import 'styles/core/elements/xloader.scss'
import {
    RotatingLines,
    Oval,
    MutatingDots,
    RotatingSquare,
    BallTriangle,
    Bars,
    FallingLines,
} from 'react-loader-spinner'

export default function XLoader({ headline1, headline2 }) {
    return (
        <div className="x-loader">
            <MutatingDots
                ariaLabel="loading-indicator"
                color="#007bff"
                secondaryColor="#1b2e4b"
            />
            <Oval
                ariaLabel="loading-indicator"
                height={50}
                width={50}
                strokeWidth={5}
                color="#007bff"
                secondaryColor="#1b2e4b"
            />
            <RotatingSquare
                ariaLabel="rotating-square"
                visible={true}
                color="#007bff"
            />
            <RotatingLines width="50" strokeColor="#fff" />
            <RotatingLines
                width="50"
                strokeColor="#007bff"
                strokeWidth="1"
                animationDuration="3"
            />
            <BallTriangle
                heigth="50"
                width="50"
                color="#007bff"
                ariaLabel="loading-indicator"
            />
            <Bars
                heigth="50"
                width="50"
                color="#17a2b8"
                ariaLabel="loading-indicator"
            />
            <FallingLines width="50" color="#007bff" />
        </div>
    )
}
