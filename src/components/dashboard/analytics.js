import React from "react";
import "../../styles/dashboard/analytics.scss";
import Card from "../card/Card";

export default function Analytics() {
    return (
        <div className="analytics">
            <div className="row">
                <Card
                    width="600px"
                    height="400px"
                    content={
                        <div>
                            <h1>hello</h1>
                        </div>
                    }
                />
                <Card
                    width="400px"
                    height="400px"
                    content={
                        <div>
                            <h1>hello</h1>
                        </div>
                    }
                />
            </div>
        </div>
    );
}
