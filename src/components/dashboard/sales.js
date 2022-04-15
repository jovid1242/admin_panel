import React from "react";
import "../../styles/dashboard/sales.scss";
import { HiDotsHorizontal } from "react-icons/hi";
import BarChart from "../BarChart";
import PaiChart from "../PaiChart";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { BiPurchaseTag } from "react-icons/bi";
import { FiCreditCard } from "react-icons/fi";
import { BsCart } from "react-icons/bs";

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
                    <div className="paiChart">
                        <PaiChart />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="firstdBlocks">
                    <div className="dailySales">
                        <div className="dailyHeadline">
                            <div className="headline">
                                <h5>Daily sales</h5>
                                <p>Go to columns for details</p>
                            </div>
                            <div className="right">
                                <BsCurrencyDollar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="secondBlocks">
                    <div className="summary">
                        <div className="summaryContent">
                            <div className="headline">
                                <h5>Summary</h5>
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
                            <div className="summaryItems">
                                <div className="orderSummary">
                                    <div className="summaryList">
                                        <div className="sumIcon viloet">
                                            <FiShoppingBag />
                                        </div>
                                        <div className="sumDetails">
                                            <div className="sumInfo">
                                                <h6>Income</h6>
                                                <p className="sumCount">
                                                    $92,500
                                                </p>
                                            </div>
                                            <div className="sumStatus">
                                                <div className="sumProgress lgBlue w90"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="summaryList">
                                        <div className="sumIcon salad">
                                            <BiPurchaseTag />
                                        </div>
                                        <div className="sumDetails">
                                            <div className="sumInfo">
                                                <h6>Profut</h6>
                                                <p className="sumCount">
                                                    $37.515
                                                </p>
                                            </div>
                                            <div className="sumStatus">
                                                <div className="sumProgress lgSalad w65"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="summaryList">
                                        <div className="sumIcon dkYellow">
                                            <FiCreditCard />
                                        </div>
                                        <div className="sumDetails">
                                            <div className="sumInfo">
                                                <h6>Expenses</h6>
                                                <p className="sumCount">
                                                    $55.085
                                                </p>
                                            </div>
                                            <div className="sumStatus">
                                                <div className="sumProgress rdOrange w80"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="thirdBlocks">
                    <div className="totalOrders">
                        <div className="headline">
                            <div className="shopCart">
                                <BsCart />
                            </div>
                            <div className="totalOrders">
                                <h5>3,192</h5>
                                <p>Total Orders</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
