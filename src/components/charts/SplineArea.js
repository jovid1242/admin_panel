import React, { useState } from "react";
import Chart from "react-apexcharts";

function SplineArea() {
    const [state, setState] = useState({
        series: [
            {
                name: "series2",
                data: [11, 32, 45, 32, 34, 52, 41]
            }
        ],
        options: {
            chart: {
                height: 350,
                type: "area",
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            // stroke: {
            //     curve: "smooth"
            // },,
            grid: {
                show: false,
                borderType: "dashed",
                yaxis: {
                    lines: {
                        show: false
                    }
                },

                xaxis: {
                    lines: {
                        show: false,
                        type: "dotted"
                    },
                    crosshairs: {
                        show: false
                    },
                    tickPlacement: "between"
                }
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                }
            },
            legend: {
                show: false
            },
            fill: {
                opacity: 0.005,
                type: "gradient",
                gradient: {
                    shade: "dark",
                    type: "vertical",
                    shadeIntensity: 0.2,
                    gradientToColors: undefined,
                    inverseColors: true,
                    opacityFrom: 0.1,
                    opacityTo: 0.5,
                    stops: [0, 50, 100],
                    colorStops: []
                }
            },
            stroke: {
                show: true,
                curve: "smooth",
                lineCap: "butt",
                colors: ["#2196f3", "#e7515a"],
                width: 2,
                dashArray: 0
            }
        }
    });

    return (
        <div>
            <Chart
                options={state.options}
                series={state.series}
                type="area"
                height={290}
                width={419}
            />
        </div>
    );
}

export default SplineArea;
