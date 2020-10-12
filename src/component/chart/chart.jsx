import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../Api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./chart.module.css";
const Chart = ({ data: { confirmed, recovered, death }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchApi();
    }, []);

    const lineChart = (
        dailyData.length ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: dailyData.map((data) => data.confirmed),
                        label: 'Infected',
                        borderColor: 'red',
                        backgroundColor: 'rgba(228, 6, 6, 0.5)',
                        fill: true,
                    },
                    {
                        data: dailyData.map((data) => data.recovered),
                        label: 'Recovered',
                        borderColor: 'blue',
                        backgroundColor: 'rgba(34, 34, 199)',
                        fill: true,
                    }
                    ],
                }}
            />
        ) : null
    );

    const barChart = (
        confirmed ? (
        <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Death'],
                datasets: [{
                    label: "People",
                    backgroundColor: ['rgba(34, 34, 199, 0.5)', 'rgb(3, 104, 3, 0.5)', 'rgb(228, 6, 6, 0.5)'],
                    data: [confirmed.value, recovered.value, death.value]
                }],
            }}

            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${country}` }
            }}
        />) : null
    )


    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    );
}

export default Chart;