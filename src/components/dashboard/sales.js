import React from "react";
import "../../styles/dashboard/sales.scss";
import { HiDotsHorizontal } from "react-icons/hi";
import BarChart from "../BarChart";

export default function Sales() {
    return (
        <div>
            <div className="row">
                <div className="renevue">
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
                <div className="byCategory">
                    <div className="headline">
                        <h5>Sales by Category</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
