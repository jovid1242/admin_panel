import React, { useState } from "react";
import Chart from "react-apexcharts";

function PaiChart() {
    const [state, setState] = useState({
        series: [44, 55, 13],
        options: {
            chart: {
                width: 380,
                type: "donut"
            },
            dataLabels: {
                enabled: false
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            show: false
                        }
                    }
                }
            ],
            legend: {
                position: "bottom",
                offsetY: 0,
                height: 50,
                customLegendItems: ["Apparel", "Sports", "Others"],
                fontSize: "18px",
                fontWeight: 400,
                labels: {
                    colors: [],
                    useSeriesColors: false
                },
                markers: {
                    width: 10,
                    height: 10,
                    fillColors: ["#5c1ac3", "#e2a03f", "#e7515a"],
                    customHTML: undefined,
                    onClick: undefined,
                    offsetX: 0,
                    offsetY: 0
                }
            }
        }
    });

    return (
        <div>
            <Chart
                options={state.options}
                series={state.series}
                type="donut"
                height={280}
                width={280}
            />
        </div>
    );
}

export default PaiChart;
