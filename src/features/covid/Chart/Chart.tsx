import React from 'react';
import Style from "./Chart.module.css"
import {Line} from "react-chartjs-2"

import {useSelector} from "react-redux";
import {selectDaily} from "../covidSlice";

const Chart: React.FC = () => {
    const daily = useSelector(selectDaily);
    const dates = daily.map(({Date}) => Date);

    const LineChart = daily.length && (
        <Line
            data={{
                labels: dates.map(date => new Date(date).toDateString()),
                datasets: [
                    {
                        data: daily.map(data => data.Confirmed),
                        label: "Infected",
                        borderColor: "#3333ff",
                        showLine: false,
                    },
                    {
                        data: daily.map(data => data.Recovered),
                        label: "Recovered",
                        borderColor: "green",
                        showLine: false,
                    },
                    {
                        data: daily.map(data => data.Deaths),
                        label: "Death",
                        borderColor: "#ff3370",
                        showLine: false,
                    },

                ]
            }}
        />
    )
    return (
        <div className={Style.container}>
            {LineChart}
        </div>
    );
};

export default Chart;
