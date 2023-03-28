import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointsValue)


    return (
        <div className="chart">
            {props.dataPoints.map((dataPoints) => (
                <ChartBar
                    key={dataPoints.lable}
                    value={dataPoints.value}
                    maxValue={totalMaximum}
                    lable={dataPoints.lable}
                />
            ))}
        </div>
    );
};

export default Chart;
