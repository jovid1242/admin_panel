import React, { useState } from "react";
import Chart from "react-apexcharts";

function ColumnChart() {
    const [state, setState] = useState({
        series: [
            {
                name: "Sales",
                data: [21, 22, 10, 28, 16, 21, 13, 30]
            }
        ],
        options: {
            chart: {
                height: 350,
                type: "bar",
                toolbar: {
                    show: false
                },
                events: {
                    click: function (chart, w, e) {
                        // console.log(chart, w, e)
                    }
                }
            },
            xaxis: {
                labels: {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    show: false
                }
            },
            yaxis: {
                show: false,
                labels: {
                    show: false
                },
                crosshairs: {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                tooltip: {
                    enabled: false,
                    offsetX: 0
                }
            }
        }
    });

    return (
        <div>
            <Chart
                options={state.options}
                series={state.series}
                type="bar"
                height={190}
                width={419}
            />
        </div>
    );
}

export default ColumnChart;
