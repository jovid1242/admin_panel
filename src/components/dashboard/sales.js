import React from "react";
import "../../styles/dashboard/sales.scss";
import { HiDotsHorizontal } from "react-icons/hi";
import BarChart from "../BarChart.js";

export default function Sales() {
    return (
        <div>
            <div className="row">
                <div className="renevue adm-col_8">
                    <div className="renevueHeadline">
                        <p>Renevue</p>
                        <div className="renevueDropdown">
                            <a href="#">
                                <HiDotsHorizontal />
                            </a>
                            <div className="dropdownMenu">
                                <a className="dropdownItem">Weekly</a>
                                <a className="dropdownItem">Monthly</a>
                                <a className="dropdownItem">Yearly</a>
                            </div>
                        </div>
                    </div>
                    <div className="barChart">
                        <BarChart />
                    </div>
                </div>
            </div>
        </div>
    );
}
