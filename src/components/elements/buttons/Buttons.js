import React from "react";
import Card from "../../card/Card";
import "../../../styles/elements/buttons.scss";

export default function Buttons() {
    return (
        <div className="card-section">
            <div className="row">
                <div className="adm-col_6">
                    <Card height="400px" content={<div>hell</div>} />
                </div>
                <div className="adm-col_6">
                    <Card height="400px" content={<div>hell</div>} />
                </div>
            </div>
            <div className="row">
                <div className="adm-col_6">
                    <Card height="400px" content={<div>hell</div>} />
                </div>
                <div className="adm-col_6">
                    <Card height="400px" content={<div>hell</div>} />
                </div>
            </div>
        </div>
    );
}
