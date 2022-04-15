import React from "react";
import "../../styles/dashboard/analytics.scss";
import Card from "../card/Card";
import VerticalBarChart from "../VerticalBarChart";

export default function Analytics() {
    return (
        <div className="analytics">
            <div className="row">
                <div className="adm-col_6">
                    <Card
                        height="400px"
                        content={
                            <div>
                                <VerticalBarChart />
                            </div>
                        }
                    />
                </div>
                <div className="adm-col_4">
                    <Card
                        height="400px"
                        content={
                            <div>
                                <VerticalBarChart />
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
}
