import { React } from 'react'
import '../../styles/core/card/xcard.scss'

import BarChart from '../../components/BarChart'

export default function XCard() {
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-header__title">
                    <h5>Renevue</h5>
                </div>
                <div className="card-actions">
                    <p>123</p>
                    {/* <div className="renevueDropdown">
                        <a href="#">
                            <HiDotsHorizontal />
                        </a>
                        <div className="dropdownMenu">
                            <a className="dropdownItem">Weekly</a>
                            <a className="dropdownItem">Monthly</a>
                            <a className="dropdownItem">Yearly</a>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="card-body">
                <BarChart />
            </div>
        </div>
    )
}
