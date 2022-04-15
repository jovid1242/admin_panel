import React from "react";
import "../../styles/card/card.scss";

export default function Card(props) {
    return (
        <>
            <div
                className="card"
                style={{ width: props?.width, height: props?.height }}
            >
                {props?.content}
            </div>
        </>
    );
}
