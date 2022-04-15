import React, { useState } from "react";
import Chart from "react-apexcharts";

function BarChart() {
    const [state, setState] = useState({
        series: [
            {
                name: "series1",
                data: [31, 40, 28, 51, 42, 109, 100]
            },
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
                show: true,
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
                        show: true
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
                show: true,
                showForSingleSeries: false,
                showForNullSeries: true,
                showForZeroSeries: true,
                position: "top",
                horizontalAlign: "right"
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
                height={365}
                width={828}
            />
        </div>
    );
}

export default BarChart;
